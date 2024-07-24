package com.mralfaa.qevent.common.enums;

public enum Message {
    SUCCESS("SUCCESS"),
    SUCCESS_REGISTRY("User successfully registered"),
    SUCCESS_LOGIN("User successfully logged in"),
    SUCCESS_ATTENDANCE("User successfully attended to the event"),

    ERROR("ERROR"),
    ERROR_CREATION("Creation Failed"),
    ERROR_UPDATE("Update Failed"),
    ERROR_DELETE("Deletion Failed"),
    ERROR_REGISTRY("Registry Failed"),
    ERROR_ATTENDANCE("Attendance Failed"),

    ATTENDANCE_ALREADY_ATTENDED("Already attended the event"),
    ATTENDANCE_OVER_QUOTA("Event quota exceeded"),

    INUSE_AUTHORITY("Authority is already in use"),
    INUSE_USERNAME("Username is already in use"),
    INUSE_TCNO("TC No is already in use"),
    INUSE_EMAIL("Email is already in use"),

    CREATED_AUTHORITY("Authority created successfully"),
    CREATED_LOGIN("Login created successfully"),
    CREATED_USER("User created successfully"),
    CREATED_EVENT("Event created successfully"),
    CREATED_ATTENDEE("Attendance created successfully"),

    UPDATED_AUTHORITY("Authority updated successfully"),
    UPDATED_LOGIN("Login updated successfully"),
    UPDATED_USER("User updated successfully"),
    UPDATED_EVENT("Event updated successfully"),

    DELETED_EVENT("Event deleted successfully"),

    NOT_FOUND_AUTHORITY("Authority not found"),
    NOT_FOUND_LOGIN("Login not found"),
    NOT_FOUND_USER("User not found"),
    ;

    private final String value;

    Message(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return value;
    }
}
