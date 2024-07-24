package com.mralfaa.qevent;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.mralfaa.qevent.service.impl.DatabasePopulationService;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class QeventApplication {

    private final DatabasePopulationService databasePopulationService;

    public QeventApplication(final DatabasePopulationService databasePopulationService) {
        this.databasePopulationService = databasePopulationService;
    }

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(QeventApplication.class, args);
    }

    @PostConstruct
    public void runTests() {
        databasePopulationService.populateDatabase();
    }

}
