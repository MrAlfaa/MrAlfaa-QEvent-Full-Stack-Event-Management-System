package com.mralfaa.qevent.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.mralfaa.qevent.model.UserProfile;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {

    Optional<UserProfile> findByTcNo(Long tcNo);

    Boolean existsByTcNoAndEmail(Long tcNo, String email);

    Boolean existsByTcNo(Long tcNo);

    Boolean existsByEmail(String email);

}