package com.mralfaa.qevent.model;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "event")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Event extends TraceableEntity {

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;

    @Column(name = "quota")
    private Integer quota;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private Set<AdditionalQuestion> additionalQuestions;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Attendee> attendees;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private Set<Survey> surveys;

    public Event(String title,
                 String description,
                 LocalDateTime startDate,
                 LocalDateTime endDate,
                 Integer quota) {
        this(
                title,
                description,
                startDate,
                endDate,
                quota,
                new HashSet<>(),
                null,
                new HashSet<>(),
                new HashSet<>()
        );
    }

    // ToDo Used Set.of()
    public Event(String title,
                 String description,
                 LocalDateTime startDate,
                 LocalDateTime endDate,
                 Integer quota,
                 String address,
                 String longitude,
                 String latitude) {
        this(
                title,
                description,
                startDate,
                endDate,
                quota,
                new HashSet<>(),
                new Address(address, longitude, latitude),
                new HashSet<>(),
                new HashSet<>()
        );
    }

    public void updateEvent(Event newEvent) {
        this.title = newEvent.getTitle();
        this.description = newEvent.getDescription();
        this.startDate = newEvent.getStartDate();
        this.endDate = newEvent.getEndDate();
        this.quota = newEvent.getQuota();

        this.additionalQuestions = newEvent.getAdditionalQuestions();
        this.address = newEvent.getAddress();
        this.attendees = newEvent.getAttendees();
        this.surveys = newEvent.getSurveys();
    }

    public boolean isUserAttended(Long userTc) {

        return attendees.stream()
                .anyMatch(
                        attendee -> attendee.getUserProfile().getTcNo().equals(userTc)
                );

    }

    public Set<UserProfile> getAttendingUserProfiles() {

        return attendees.stream()
                .map(Attendee::getUserProfile)
                .collect(Collectors.toSet());
    }

}

