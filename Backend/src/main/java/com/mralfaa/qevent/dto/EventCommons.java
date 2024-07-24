package com.mralfaa.qevent.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.mralfaa.qevent.model.Event;

import jakarta.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class EventCommons {

    @NotEmpty(message = "Title is required")
    protected String title;

    protected String description;

    @NotNull(message = "Start date is required")
    @FutureOrPresent(message = "Invalid Start date")
    protected LocalDateTime startDate;

    @NotNull(message = "End date is required")
    @FutureOrPresent(message = "Invalid End date")
    protected LocalDateTime endDate;

    @Min(value = 1, message = "The event's quota must be at least one")
    protected Integer quota;

    @Size(max = 256, message = "Address description size must be smaller than 256 characters")
    protected String address;

    @NotEmpty(message = "Longitude is required")
    protected String longitude;

    @NotEmpty(message = "Latitude is required")
    protected String latitude;

    public EventCommons(Event event) {
        this.title = event.getTitle();
        this.description = event.getDescription();
        this.startDate = event.getStartDate();
        this.endDate = event.getEndDate();
        this.quota = event.getQuota();
        this.address = event.getAddress().getAddress();
        this.longitude = event.getAddress().getLongitude();
        this.latitude = event.getAddress().getLatitude();
    }

    @AssertTrue(message = "Start date must be before end date")
    public boolean hasProperDateRange() {
        if (Objects.isNull(startDate) || Objects.isNull(endDate))
            return false;
        else
            return startDate.compareTo(endDate) < 0;
    }

    public Event toEntity() {
        return new Event(
                title,
                description,
                startDate,
                endDate,
                quota,
                address,
                longitude,
                latitude
        );
    }

}