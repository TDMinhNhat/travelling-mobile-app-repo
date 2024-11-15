package dev.skyherobrine.service.services.impl;

import dev.skyherobrine.service.services.IFileService;
import dev.skyherobrine.service.utils.S3Bucket;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ServiceTravellingImageFileService implements IFileService {

    private S3Bucket s3;

    public ServiceTravellingImageFileService(S3Bucket s3) {
        this.s3 = s3;
    }

    @Override
    public String uploadFile(String id, MultipartFile file) throws Exception {
        String fileName = DateTimeFormatter.ofPattern("dd-MM-yyyy-hh-mm-ss").format(LocalDateTime.now()) + "_service_" + id + ".png";
        FileOutputStream fileOutput = new FileOutputStream(fileName);
        fileOutput.write(file.getBytes());
        fileOutput.flush();

        File target = new File(fileName);
        s3.uploadFile(target);
        return fileName;
    }

    @Override
    @Deprecated
    public List<String> uploadFile(String id, MultipartFile... files) throws Exception {
        return null;
    }

    @Override
    public URL getURLFile(String keyFileName) throws Exception {
        return s3.getSingleURLFile(keyFileName);
    }

    @Override
    @Deprecated
    public List<URL> getURLFile(List<String> keyFileNames) throws Exception {
        return null;
    }
}
