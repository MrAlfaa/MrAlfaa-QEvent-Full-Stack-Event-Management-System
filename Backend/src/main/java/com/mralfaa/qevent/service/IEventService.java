package com.mralfaa.qevent.service;



import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.model.Event;

import jakarta.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

public interface IEventService {

    Event getEventById(Long id);

    List<Event> getAllEvents();

    List<Event> getAllCurrentEvents();

    List<Event> getCurrentEventsByUserTc(Long userTc);

    List<Event> getAttendedEventsByUserTc(Long userTc);

    @Transactional
    Event createEvent(Event event);

    @Transactional
    Event createEvent(String title, String description, LocalDateTime startDate, LocalDateTime endDate, Integer quota, String address, String longitude, String latitude);

    @Transactional
    Event updateById(Long id, Event newEvent);

    @Transactional
    MessageResponse updateByIdCheckEventStarted(Long id, Event newEvent);

    MessageResponse deleteByIdCheckEventStarted(Long id);

    boolean checkEventStarted(Event event);

    void deleteById(Long id);
}
