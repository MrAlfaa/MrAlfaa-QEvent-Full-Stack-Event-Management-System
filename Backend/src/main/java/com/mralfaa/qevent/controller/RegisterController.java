package com.mralfaa.qevent.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.common.enums.Authorities;
import com.mralfaa.qevent.common.enums.Message;
import com.mralfaa.qevent.dto.RegisterRequest;
import com.mralfaa.qevent.model.UserLogin;
import com.mralfaa.qevent.model.UserProfile;
import com.mralfaa.qevent.service.IRegisterService;
import com.mralfaa.qevent.service.impl.RegisterService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    private final IRegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping("/external")
    public ResponseEntity<List<String>> register(@Valid @RequestBody RegisterRequest registerRequest) {

        UserLogin userLogin = registerRequest.getUserLogin();
        UserProfile userProfile = registerRequest.getUserProfile();

        MessageResponse messageResponse = registerService.registerUser(Authorities.EXTERNAL, userLogin, userProfile);

        if (messageResponse.getMessage() == Message.SUCCESS_REGISTRY) {
            return ResponseEntity
                    .ok()
                    .body(List.of(messageResponse.getMessage().getValue()));
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(List.of(messageResponse.getMessage().getValue()));
        }

    }

}
