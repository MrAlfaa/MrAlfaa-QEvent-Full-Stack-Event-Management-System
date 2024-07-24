package com.mralfaa.qevent.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import jakarta.persistence.*;

@Entity
@Table(name = "additional_question_answer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@IdClass(AdditionalQuestionAnswerPK.class)
public class AdditionalQuestionAnswer {

    @Id
    private Long additionalQuestionId;

    @Id
    private Long attendeeId;

    @Column(name = "answer")
    private String answer;

    @Fetch(FetchMode.JOIN)
    @ManyToOne
    @JoinColumn(name = "additional_question_id", nullable = false, updatable = false, insertable = false, referencedColumnName = "id")
    private AdditionalQuestion additionalQuestion;

    @Fetch(FetchMode.JOIN)
    @ManyToOne
    @JoinColumn(name = "attendee_id", nullable = false, updatable = false, insertable = false, referencedColumnName = "id")
    private Attendee attendee;

}
