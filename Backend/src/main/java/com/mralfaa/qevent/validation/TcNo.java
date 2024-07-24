package com.mralfaa.qevent.validation;


import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = TcNoValidator.class)
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface TcNo {

    String message() default "Invalid TC no";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
