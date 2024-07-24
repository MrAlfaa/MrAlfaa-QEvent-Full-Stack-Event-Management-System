package com.mralfaa.qevent.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.common.enums.Message;
import com.mralfaa.qevent.dto.LoginRequest;
import com.mralfaa.qevent.dto.LoginResponse;
import com.mralfaa.qevent.service.ILoginService;
import com.mralfaa.qevent.service.impl.LoginService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private final ILoginService loginService;

    public LoginController(final LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody final LoginRequest loginRequest) {
        MessageResponse<LoginResponse> messageResponse = loginService.login(loginRequest);

        if (messageResponse.getMessage() == Message.SUCCESS_LOGIN) {
            return ResponseEntity.ok().body(messageResponse.getT());
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
