package com.mralfaa.qevent.service.impl;



import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.common.enums.Authorities;
import com.mralfaa.qevent.common.enums.Message;
import com.mralfaa.qevent.model.Authority;
import com.mralfaa.qevent.model.UserLogin;
import com.mralfaa.qevent.model.UserProfile;
import com.mralfaa.qevent.repository.AuthorityRepository;
import com.mralfaa.qevent.repository.UserLoginRepository;
import com.mralfaa.qevent.repository.UserProfileRepository;
import com.mralfaa.qevent.service.IRegisterService;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class RegisterService implements IRegisterService {

    private final AuthorityRepository authorityRepository;
    private final UserLoginRepository userLoginRepository;
    private final UserProfileRepository userProfileRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterService(AuthorityRepository authorityRepository,
                           UserLoginRepository userLoginRepository,
                           UserProfileRepository userProfileRepository,
                           PasswordEncoder passwordEncoder) {
        this.authorityRepository = authorityRepository;
        this.userLoginRepository = userLoginRepository;
        this.userProfileRepository = userProfileRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public MessageResponse registerUser(Authorities authorities, UserLogin userLogin, UserProfile userProfile) {

        Optional<Authority> optionalAuthority = authorityRepository.findByAuthority(authorities.getValue());

        if (optionalAuthority.isEmpty())
            return new MessageResponse<>(Message.NOT_FOUND_AUTHORITY);

        if (userLoginRepository.existsByUsername(userLogin.getUsername()))
            return new MessageResponse(Message.INUSE_USERNAME);

        if (userProfileRepository.existsByTcNo(userProfile.getTcNo()))
            return new MessageResponse(Message.INUSE_TCNO);

        if (userProfileRepository.existsByEmail(userProfile.getEmail()))
            return new MessageResponse(Message.INUSE_EMAIL);

        Authority authority = optionalAuthority.get();

        userLogin.setPassword(passwordEncoder.encode(userLogin.getPassword()));

        userLogin.getAuthorities().add(authority);

        UserLogin savedUserLogin = userLoginRepository.save(userLogin);

        userProfile.getUserLogins().add(savedUserLogin);

        savedUserLogin.setUserProfile(userProfile);

        userProfileRepository.save(userProfile);

        UserProfile savedUserProfile = userProfileRepository.findByTcNo(userProfile.getTcNo()).get();

        if (savedUserProfile.getTcNo() > 0)
            return new MessageResponse<>(Message.SUCCESS_REGISTRY);
        else
            return new MessageResponse<>(Message.ERROR_REGISTRY);
    }

    @Override
    public MessageResponse registerUser(Long tcNo, String email, String name, String surname, LocalDate birthDate, String username, String password, Authorities authorities) {
        return registerUser(
                authorities,
                new UserLogin(username, password),
                new UserProfile(tcNo, email, name, surname, birthDate)
        );
    }

}

