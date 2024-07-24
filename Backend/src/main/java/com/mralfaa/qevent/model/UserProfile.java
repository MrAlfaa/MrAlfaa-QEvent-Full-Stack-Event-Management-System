package com.mralfaa.qevent.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user_profile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserProfile {

    @Id
    @Column(name = "tc_no", unique = true)
    private Long tcNo;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @OneToMany(mappedBy = "userProfile", cascade = CascadeType.ALL)
    private Set<Attendee> attendees;

    @OneToMany(mappedBy = "userProfile", cascade = CascadeType.ALL)
    private Set<UserLogin> userLogins;

    public UserProfile(Long tcNo, String email, String name, String surname, LocalDate birthDate) {
        this(tcNo, email, name, surname, birthDate, new HashSet<>(), new HashSet<>());
    }

}
