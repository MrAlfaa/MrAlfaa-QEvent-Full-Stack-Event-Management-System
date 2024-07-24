package com.mralfaa.qevent.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    @Column(name = "address")
    private String address;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "latitude")
    private String latitude;

}
