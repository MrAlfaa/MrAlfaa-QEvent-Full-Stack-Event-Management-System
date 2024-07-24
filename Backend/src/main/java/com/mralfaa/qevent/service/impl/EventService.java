package com.mralfaa.qevent.service.impl;


import org.springframework.stereotype.Service;
import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.common.enums.Message;
import com.mralfaa.qevent.model.Event;
import com.mralfaa.qevent.repository.EventRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventService implements com.mralfaa.qevent.service.IEventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Event Not Found.")
        );
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public List<Event> getAllCurrentEvents() {
        return this.eventRepository.findByStartDateAfter(LocalDateTime.now());
    }

    @Override
    public List<Event> getCurrentEventsByUserTc(Long userTc) {
        return getAllCurrentEvents().stream()
                .filter(event -> !event.isUserAttended(userTc))
                .toList();
    }

    @Override
    public List<Event> getAttendedEventsByUserTc(Long userTc) {
        return getAllEvents().stream()
                .filter(event -> event.isUserAttended(userTc))
                .toList();
    }

    @Override
    @Transactional
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    @Transactional
    public Event createEvent(String title, String description, LocalDateTime startDate, LocalDateTime endDate, Integer quota, String address, String longitude, String latitude) {
        return createEvent(new Event(title, description, startDate, endDate, quota, address, longitude, latitude));
    }

    @Override
    @Transactional
    public Event updateById(Long id, Event newEvent) {
        Event event = eventRepository.findById(id).orElseThrow(() ->
                new EntityNotFoundException("Event with id %s is not found".formatted(id)));

        event.updateEvent(newEvent);

        return eventRepository.save(event);
    }

    @Override
    @Transactional
    public MessageResponse updateByIdCheckEventStarted(Long id, Event newEvent) {
        Event event = eventRepository.findById(id).orElseThrow(() ->
                new EntityNotFoundException("Event with id %s is not found".formatted(id)));

        if (checkEventStarted(event))
            return new MessageResponse(Message.ERROR_UPDATE);
        else {
            event.updateEvent(newEvent);
            Event updatedEvent = eventRepository.save(event);
            return new MessageResponse(Message.UPDATED_EVENT);
        }
    }


    @Override
    public MessageResponse deleteByIdCheckEventStarted(Long id) {
        Event event = eventRepository.findById(id).orElseThrow(() ->
                new EntityNotFoundException("Event with id %s is not found".formatted(id)));

        if (checkEventStarted(event))
            return new MessageResponse(Message.ERROR_DELETE);
        else {
            eventRepository.delete(event);
            return new MessageResponse(Message.DELETED_EVENT);
        }
    }

    @Override
    public boolean checkEventStarted(Event event) {
        return LocalDateTime.now().isAfter(event.getStartDate());
    }

    @Override
    public void deleteById(Long id) {
        eventRepository.deleteById(id);
    }

}
