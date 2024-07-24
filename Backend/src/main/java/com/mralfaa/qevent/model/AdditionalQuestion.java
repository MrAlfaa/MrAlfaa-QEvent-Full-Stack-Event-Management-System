package com.mralfaa.qevent.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Table(name = "additional_question")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdditionalQuestion extends BaseEntity {

    @Column(name = "question")
    private String question;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id")
    private Event event;

}

