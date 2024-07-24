package com.mralfaa.qevent.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.mralfaa.qevent.model.Authority;

import java.util.Optional;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {

    Optional<Authority> findByAuthority(String authority);

    Boolean existsByAuthority(String authority);

}