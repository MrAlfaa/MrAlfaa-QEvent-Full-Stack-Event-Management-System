package com.mralfaa.qevent.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.mralfaa.qevent.model.UserLogin;
import com.mralfaa.qevent.model.UserProfile;

import java.util.List;
import java.util.Optional;

public interface UserLoginRepository extends JpaRepository<UserLogin, Long> {

    Optional<UserLogin> findByUsername(String username);

    List<UserLogin> findAllByUserProfile(UserProfile userProfile);

    Boolean existsByUsername(String username);

}
