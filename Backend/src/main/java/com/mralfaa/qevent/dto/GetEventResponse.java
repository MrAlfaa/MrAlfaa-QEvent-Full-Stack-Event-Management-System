package com.mralfaa.qevent.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.mralfaa.qevent.model.Event;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GetEventResponse extends EventCommons {

    protected Long id;

    public GetEventResponse(Event event) {
        super(
                event.getTitle(),
                event.getDescription(),
                event.getStartDate(),
                event.getEndDate(),
                event.getQuota(),
                event.getAddress().getAddress(),
                event.getAddress().getLongitude(),
                event.getAddress().getLatitude()
        );

        this.id = event.getId();
    }

}
