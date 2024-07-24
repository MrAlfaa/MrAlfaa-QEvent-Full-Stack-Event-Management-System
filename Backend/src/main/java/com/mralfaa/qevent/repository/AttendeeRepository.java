package com.mralfaa.qevent.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.mralfaa.qevent.model.Attendee;
import com.mralfaa.qevent.model.Event;
import com.mralfaa.qevent.model.UserProfile;

import java.util.List;
import java.util.Optional;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {

    List<Attendee> findAllByUserProfile(UserProfile userProfile);

    List<Attendee> findAllByEvent(Event event);

    Attendee findByUserProfileAndEvent(UserProfile userProfile, Event event);

    Boolean existsByUserProfileAndEvent(UserProfile userProfile, Event event);

    Boolean existsByUserProfile(UserProfile userProfile);

    Boolean existsByEvent(Event event);

    Optional<Attendee> findByUserProfile(UserProfile userProfile);

    Optional<Attendee> findByEvent(Event event);

    Integer countAllByEvent(Event event);

}