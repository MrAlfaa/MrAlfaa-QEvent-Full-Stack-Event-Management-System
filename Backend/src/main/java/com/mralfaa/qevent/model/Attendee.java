package com.mralfaa.qevent.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "attendee")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Attendee extends TraceableEntity {

    @Column(name = "survey_status")
    private Boolean surveyStatus;

    @ManyToOne
    @JoinColumn(name = "user_tc", referencedColumnName = "tc_no")
    private UserProfile userProfile;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id")
    private Event event;

    @OneToMany(mappedBy = "attendee", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<AttendeeQuestion> attendeeQuestions;

    public Attendee(UserProfile userProfile, Event event) {
        this(null, userProfile, event, new HashSet<>());
    }

}
