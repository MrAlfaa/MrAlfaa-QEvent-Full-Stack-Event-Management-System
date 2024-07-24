package com.mralfaa.qevent.exception;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity<List<String>> handleValidationException(MethodArgumentNotValidException e) {

        return ResponseEntity.badRequest().body(
                e.getFieldErrors()
                        .stream().map(DefaultMessageSourceResolvable::getDefaultMessage)
                        .toList()
        );
    }

    @ExceptionHandler(value = EntityNotFoundException.class)
    public ResponseEntity<List<String>> handleEntityNotFoundException(EntityNotFoundException e) {

        return ResponseEntity.badRequest().body(
                List.of(e.getMessage())
        );
    }

}
