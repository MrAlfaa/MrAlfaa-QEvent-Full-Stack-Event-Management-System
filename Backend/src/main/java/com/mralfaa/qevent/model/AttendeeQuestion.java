package com.mralfaa.qevent.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Table(name = "attendee_question")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AttendeeQuestion extends BaseEntity {

    @Column(name = "question")
    private String question;

    @Column(name = "answer")
    private String answer;

    @ManyToOne
    @JoinColumn(name = "attendee_id", referencedColumnName = "id")
    private Attendee attendee;
}
