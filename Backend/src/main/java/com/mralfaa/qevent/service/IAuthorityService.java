package com.mralfaa.qevent.service;



import com.mralfaa.qevent.common.MessageResponse;
import com.mralfaa.qevent.model.Authority;

import jakarta.transaction.Transactional;
import java.util.List;

public interface IAuthorityService {
    List<Authority> getAllAuthorities();

    Authority getAuthorityById(Long id) throws Exception;

    Authority getAuthorityByAuthority(String authority) throws Exception;

    Boolean existsByAuthority(String authority);

    @Transactional
    Authority createAuthority(Authority authority);

    @Transactional
    MessageResponse<Authority> createAuthorityChecked(String authority);

}
