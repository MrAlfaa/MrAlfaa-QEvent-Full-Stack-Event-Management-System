package com.mralfaa.qevent.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.common.enums.Message;
import com.mralfaa.qevent.dto.LoginRequest;
import com.mralfaa.qevent.dto.LoginResponse;
import com.mralfaa.qevent.model.Authority;
import com.mralfaa.qevent.model.UserLogin;
import com.mralfaa.qevent.service.ILoginService;
import com.mralfaa.qevent.util.JwtUtil;

@Service
public class LoginService implements ILoginService {

    private final AuthenticationManager authenticationManager;
    private final UserLoginService userLoginService;
    @Value("${security.jwt.secret-key}")
    private String secretKey;

    public LoginService(final AuthenticationManager authenticationManager, final UserLoginService userLoginService) {
        this.authenticationManager = authenticationManager;
        this.userLoginService = userLoginService;
    }

    @Override
    public MessageResponse<LoginResponse> login(LoginRequest loginRequest) {
        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());

        try {
            Authentication authenticatedToken = authenticationManager.authenticate(token);
            String generatedToken = JwtUtil.generateToken(authenticatedToken, secretKey);

            UserLogin userLogin = userLoginService.getByUsername(loginRequest.getUsername());
            String authority = ((Authority) userLogin.getAuthorities().toArray()[0]).getAuthority();
            Long tcNo = (userLogin).getUserProfile().getTcNo();

            return new MessageResponse<>(Message.SUCCESS_LOGIN, new LoginResponse(generatedToken, authority, tcNo));

        } catch (Exception ex) {
            return new MessageResponse<>(Message.NOT_FOUND_USER, null);
        }
    }

    
}
