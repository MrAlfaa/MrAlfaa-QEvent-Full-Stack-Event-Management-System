package com.mralfaa.qevent.common;

import com.mralfaa.qevent.common.enums.Message;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class MessageResponse<T> {

    final private Message message;
    private T t;

}