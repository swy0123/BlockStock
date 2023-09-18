package com.olock.blockstock.member.domain.member.application;

import com.olock.blockstock.member.domain.member.dto.request.EmailConfirmRequest;
import com.olock.blockstock.member.domain.member.dto.request.EmailSendRequest;
import com.olock.blockstock.member.domain.member.exception.DuplicateEmailException;
import com.olock.blockstock.member.domain.member.exception.NoEmailException;
import com.olock.blockstock.member.domain.member.exception.WrongTokenException;
import com.olock.blockstock.member.domain.member.persistence.EmailCodeRepository;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import com.olock.blockstock.member.domain.member.persistence.entity.EmailCode;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final MemberRepository memberRepository;
    private final EmailCodeRepository emailCodeRepository;
    private final JavaMailSender javaMailSender;

    @Value("${MAIL_USERNAME}")
    private String smtpUserName;

    public void sendEmail(EmailSendRequest emailSendRequest) {
        if (memberRepository.existsByEmail(emailSendRequest.getEmail())) {
            throw new DuplicateEmailException("중복 이메일");
        }
        String key = createKey();

        MimeMessage message = null;
        try {
            message = createMessage(emailSendRequest.getEmail(), key);
//            emailCodeRepository.deleteById(emailSendRequest.getEmail());
            emailCodeRepository.save(new EmailCode(emailSendRequest.getEmail(), key));
            javaMailSender.send(message);
        } catch (MailException | MessagingException | UnsupportedEncodingException es) {
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
    }


    public void sendPasswordEmail(EmailSendRequest emailSendRequest) {
        String email = emailSendRequest.getEmail();
        if (!memberRepository.existsByEmail(email)) {
            throw new NoEmailException("없는 이메일");
        }
        String key = createKey();

        MimeMessage message = null;
        try {
            message = createPasswordMessage(email, key);
            // TODO : Email Update
//            updateMemberPassword(email, key);
            javaMailSender.send(message);
        } catch (MailException | MessagingException | UnsupportedEncodingException es) {
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
    }

    public void confirmEmail(EmailConfirmRequest emailConfirmRequest) {
        EmailCode emailCode = emailCodeRepository.findByEmail(emailConfirmRequest.getEmail()).orElseThrow(() ->
                new NoEmailException("없는 사용자입니다.")
        );

        if (!emailConfirmRequest.getCode().equals(emailCode.getCode())) {
            throw new WrongTokenException("잘못된 인증입니다");
        }

        emailCodeRepository.deleteById(emailCode.getEmail());
    }

    private MimeMessage createMessage(String to, String key) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.addRecipients(MimeMessage.RecipientType.TO, to);
        message.setSubject("Voss 회원가입 이메일 인증");

        String mmsg = "";
        mmsg += "<div style='margin:100px;'>";
        mmsg += "<h1> 안녕하세요</h1>";
        mmsg += "<h1> 모두가 성우가 되는 Voss 입니다</h1>";
        mmsg += "<br>";
        mmsg += "<p>아래 코드를 회원가입 창으로 돌아가 입력해주세요<p>";
        mmsg += "<br>";
        mmsg += "<p>많은 관심 감사합니다!<p>";
        mmsg += "<br>";
        mmsg += "<div align='center' style='border:1px solid black; font-family:verdana';>";
        mmsg += "<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>";
        mmsg += "<div style='font-size:130%'>";
        mmsg += "CODE : <strong>";
        mmsg += key + "</strong><div><br/> ";
        mmsg += "</div>";
        message.setText(mmsg, "utf-8", "html");
        message.setFrom(new InternetAddress(smtpUserName + "@naver.com", "Voss 관리자"));

        return message;
    }

    private MimeMessage createPasswordMessage(String to, String key) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.addRecipients(MimeMessage.RecipientType.TO, to);
        message.setSubject("Voss 임시 비밀번호");

        String mmsg = "";
        mmsg += "<div style='margin:100px;'>";
        mmsg += "<h1> 안녕하세요</h1>";
        mmsg += "<h1> 모두가 성우가 되는 Voss 입니다</h1>";
        mmsg += "<br>";
        mmsg += "<p>귀하의 임시 비밀번호가 아래와 같이 변경되었습니다.<p>";
        mmsg += "<br>";
        mmsg += "<p>많은 관심 감사합니다!<p>";
        mmsg += "<br>";
        mmsg += "<div align='center' style='border:1px solid black; font-family:verdana';>";
        mmsg += "<h3 style='color:blue;'>임시 비밀 번호입니다.</h3>";
        mmsg += "<div style='font-size:130%'>";
        mmsg += "CODE : <strong>";
        mmsg += key + "</strong><div><br/> ";
        mmsg += "</div>";
        message.setText(mmsg, "utf-8", "html");
        message.setFrom(new InternetAddress(smtpUserName + "@naver.com", "Voss 관리자"));

        return message;
    }

    private String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) {
            int index = rnd.nextInt(3);

            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    break;
            }
        }

        return key.toString();
    }
}
