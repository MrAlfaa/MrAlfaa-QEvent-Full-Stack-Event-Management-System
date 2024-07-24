package com.mralfaa.qevent.model;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "authority")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Authority extends BaseEntity implements GrantedAuthority {

    @Column(name = "authority", unique = true)
    private String authority;

    @ManyToMany(mappedBy = "authorities")
    private Set<UserLogin> userLogins;

    public Authority(String authority) {
        this(authority, new HashSet<>());
    }

}
