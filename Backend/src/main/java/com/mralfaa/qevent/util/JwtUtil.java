package com.mralfaa.qevent.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

public class JwtUtil {

    public static String generateToken(Authentication user, String key) {
        return Jwts.builder()
                .setSubject(user.getName())
                .claim("authorities", getAuthorities(user))
                .setExpiration(getExpirationDate())
                .signWith(SignatureAlgorithm.HS256, key.getBytes())
                .compact();
    }

    public static String extractUsername(String jwtToken, String secretKey) {
        return Jwts.parser()
                .setSigningKey(secretKey.getBytes())
                .parseClaimsJws(jwtToken)
                .getBody()
                .getSubject();
    }

    private static Date getExpirationDate() {
        Instant expirationTime = LocalDate.now()
                .plusDays(7)
                .atStartOfDay()
                .atZone(ZoneId.systemDefault())
                .toInstant();

        return Date.from(expirationTime);
    }

    private static List<String> getAuthorities(Authentication user) {
        return user.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .toList();
    }
}
