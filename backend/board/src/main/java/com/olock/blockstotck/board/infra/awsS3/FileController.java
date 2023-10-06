package com.olock.blockstotck.board.infra.awsS3;

import java.io.IOException;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class FileController {

    private final AwsS3Uploader awsS3Uploader;

    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        String fileName = awsS3Uploader.upload(multipartFile, "test");
        return fileName;
    }

    @DeleteMapping("/delete-test")
    public void delete(){
        awsS3Uploader.delete("test/d3d52bf7-aeb5-485f-b910-f7c9e62bda93image (8).png");
    }
}
