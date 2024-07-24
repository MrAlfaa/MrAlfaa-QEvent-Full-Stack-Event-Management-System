package com.mralfaa.qevent.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user_login")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLogin extends BaseEntity implements UserDetails {

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "user_tc", referencedColumnName = "tc_no")
    private UserProfile userProfile;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "login_authorities",
            joinColumns = @JoinColumn(name = "login_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id")
    )
    private Set<Authority> authorities;

    public UserLogin(String username, String password) {
        this(username, password, null, new HashSet<>());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
