package com.mralfaa.qevent.common.enums;

public enum Authorities {
    ROOT("ROOT"),
    ADMIN("ADMIN"),
    INTERNAL("INTERNAL"),
    EXTERNAL("EXTERNAL");

    private final String value;

    Authorities(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

}
