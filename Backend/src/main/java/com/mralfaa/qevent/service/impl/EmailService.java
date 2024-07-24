package com.mralfaa.qevent.service.impl;



import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import com.mralfaa.qevent.configuration.EmailConfiguration;
import com.mralfaa.qevent.model.Attendee;
import com.mralfaa.qevent.model.Event;
import com.mralfaa.qevent.model.UserProfile;
import com.mralfaa.qevent.util.QRCodeUtil;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import java.nio.file.Paths;
import java.time.format.DateTimeFormatter;

@Service
public class EmailService {

    private final EmailConfiguration emailConfiguration;

    private final JavaMailSenderImpl emailSender;
    private final String attendanceEmailText;

    {
        attendanceEmailText =
                "Dear member %s,\n" +
                        "You have successfully attended to %s on %s.\n" +
                        "The event will take place between %s and %s at %s.\n" +
                        "You can find your QR Code at attachments. Might be handy to event entrance.\n" +
                        "We hope you have a good time at your event.\n" +
                        "Thank you for choosing us,\n" +
                        "Event Marine Team.";
    }

    public EmailService(EmailConfiguration emailConfiguration) {
        this.emailConfiguration = emailConfiguration;
        emailSender = prepareMailSender();
    }

    private JavaMailSenderImpl prepareMailSender() {
        JavaMailSenderImpl emailSender = new JavaMailSenderImpl();

        emailSender.setHost(emailConfiguration.getHost());
        emailSender.setPort(emailConfiguration.getPort());
        emailSender.setUsername(emailConfiguration.getUsername());
        emailSender.setPassword(emailConfiguration.getPassword());

        return emailSender;
    }

    @Async
    public void sendEmailToAttendee(Attendee attendee) {

        UserProfile user = attendee.getUserProfile();
        Event event = attendee.getEvent();

        String fullname = user.getName() + " " + user.getSurname();
        String email = user.getEmail();

        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

        String startDate = event.getStartDate().format(dateTimeFormatter);
        String endDate = event.getEndDate().format(dateTimeFormatter);

        String attendanceDate = attendee.getCreationDate().format(dateTimeFormatter);

        String text = attendanceEmailText.formatted(
                fullname, event.getTitle(), attendanceDate, startDate, endDate,
                event.getAddress().getAddress()
        );

        String qrcodePath = QRCodeUtil.getQRCodePath(attendee);

        sendEmailWithAttachment(
                user.getEmail(),
                "Event Marine: Attendance to %s".formatted(event.getTitle()),
                text,
                "QR_Code.png",
                qrcodePath
        );
    }

    protected void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }

    protected void sendEmailWithAttachment(String to, String subject, String text, String nameOfAttachment, String pathToAttachment) {

        MimeMessage message = emailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom("noreply@eventmarine.com");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text);

            FileSystemResource file = new FileSystemResource(Paths.get(pathToAttachment));
            helper.addAttachment(nameOfAttachment, file);

            emailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }



}

