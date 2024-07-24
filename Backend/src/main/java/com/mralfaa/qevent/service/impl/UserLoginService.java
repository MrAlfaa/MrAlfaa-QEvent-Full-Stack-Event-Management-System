package com.mralfaa.qevent.service.impl;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.mralfaa.qevent.model.UserLogin;
import com.mralfaa.qevent.repository.UserLoginRepository;

@Service
public class UserLoginService implements UserDetailsService {

    private final UserLoginRepository userLoginRepository;

    public UserLoginService(final UserLoginRepository userLoginRepository) {
        this.userLoginRepository = userLoginRepository;
    }

    public UserLogin getByUsername(String username) throws UsernameNotFoundException {
        return userLoginRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found."));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userLoginRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found."));
    }
}
