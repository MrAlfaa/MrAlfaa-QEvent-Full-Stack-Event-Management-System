package com.mralfaa.qevent.service;



import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.dto.LoginRequest;
import com.mralfaa.qevent.dto.LoginResponse;

public interface ILoginService {
    MessageResponse<LoginResponse> login(LoginRequest loginRequest);
}

