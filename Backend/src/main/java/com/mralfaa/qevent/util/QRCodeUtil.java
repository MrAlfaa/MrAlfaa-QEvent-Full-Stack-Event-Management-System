package com.mralfaa.qevent.util;



import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.mralfaa.qevent.model.Attendee;
import com.mralfaa.qevent.model.Event;
import com.mralfaa.qevent.model.UserProfile;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.format.DateTimeFormatter;

public class QRCodeUtil {

    private static String qrcodeDirPath = "";

    private static void createQRCodeDir() {
        try {
            qrcodeDirPath = Files.createTempDirectory("qrcode").toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static BufferedImage getQRCode(Attendee attendee) {

        String qrData = generateQrCodeData(attendee);

        try {
            BitMatrix matrix = new MultiFormatWriter()
                    .encode(qrData, BarcodeFormat.QR_CODE, 400, 400);

            return MatrixToImageWriter.toBufferedImage(matrix);
        } catch (WriterException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String getQRCodePath(Attendee attendee) {

        if (qrcodeDirPath.equals("")) {
            createQRCodeDir();
        }

        String qrData = generateQrCodeData(attendee);

        String qrPath = qrcodeDirPath + "/%s.png".formatted(attendee.getId().toString());

        try {
            BitMatrix matrix = new MultiFormatWriter()
                    .encode(qrData, BarcodeFormat.QR_CODE, 400, 400);

            MatrixToImageWriter.writeToPath(matrix, "png", Paths.get(qrPath));

            return qrPath;
        } catch (WriterException | IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private static String generateQrCodeData(Attendee attendee) {
        UserProfile user = attendee.getUserProfile();
        Event event = attendee.getEvent();

        Long tc = user.getTcNo();
        String fullname = user.getName() + " " + user.getSurname();

        String title = event.getTitle();
        String description = event.getDescription();

        String attandanceDate = attendee.getCreationDate().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm"));

        return "TC: " + tc + "\n" +
                "Full Name: " + fullname + "\n" +
                "Event Tittle: " + title + "\n" +
                "Event Description: " + description + "\n" +
                "Attendance Date: " + attandanceDate;
    }

}

