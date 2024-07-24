package com.mralfaa.qevent.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Table(name = "survey")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Survey extends BaseEntity {

    @Column(name = "result")
    private String result;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id")
    private Event event;

}

