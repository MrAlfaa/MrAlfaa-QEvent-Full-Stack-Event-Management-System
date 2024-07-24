package com.mralfaa.qevent.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.mralfaa.qevent.model.Event;

import java.time.LocalDateTime;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {

    List<Event> findByStartDateAfter(LocalDateTime date);

    List<Event> findByEndDateBefore(LocalDateTime date);

}

