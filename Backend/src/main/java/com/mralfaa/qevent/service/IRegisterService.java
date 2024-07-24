package com.mralfaa.qevent.service;


import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.common.enums.Authorities;
import com.mralfaa.qevent.model.UserLogin;
import com.mralfaa.qevent.model.UserProfile;

import java.time.LocalDate;

public interface IRegisterService {
    MessageResponse registerUser(Authorities authorities, UserLogin userLogin, UserProfile userProfile);

    MessageResponse registerUser(Long tcNo, String email, String name, String surname, LocalDate birthDate, String username, String password, Authorities authorities);
}
