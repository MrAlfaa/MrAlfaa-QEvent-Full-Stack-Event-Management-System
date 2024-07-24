package com.mralfaa.qevent.model;

import lombok.*;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdditionalQuestionAnswerPK implements Serializable {

    @Column(name = "additional_question_id")
    private Long additionalQuestionId;

    @Column(name = "attendee_id")
    private Long attendeeId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AdditionalQuestionAnswerPK that = (AdditionalQuestionAnswerPK) o;
        return additionalQuestionId.equals(that.additionalQuestionId) && attendeeId.equals(that.attendeeId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(additionalQuestionId, attendeeId);
    }

}
