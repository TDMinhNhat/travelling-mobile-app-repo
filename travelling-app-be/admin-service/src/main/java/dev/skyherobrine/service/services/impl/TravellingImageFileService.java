package dev.skyherobrine.service.services.impl;

import dev.skyherobrine.service.services.IFileService;
import dev.skyherobrine.service.utils.S3Bucket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class TravellingImageFileService implements IFileService {

    @Autowired
    private S3Bucket s3;

    @Override
    public String uploadFile(String id, MultipartFile file) throws Exception {
        String nameFile = DateTimeFormatter.ofPattern("dd-MM-yyyy-hh-mm-ss").format(LocalDateTime.now()) + "_travelling_" + id + ".png";
        FileOutputStream fileOutput = new FileOutputStream(nameFile);
        fileOutput.write(file.getBytes());
        fileOutput.flush();

        File target = new File(nameFile);
        s3.uploadFile(target);
        target.delete();

        return nameFile;
    }

    @Override
    public List<String> uploadFile(String id, MultipartFile... files) throws Exception {
        List<String> listNameFiles = new ArrayList<>();
        for(MultipartFile file : files) {
            String nameFile = DateTimeFormatter.ofPattern("dd-MM-yyyy-hh-mm-ss").format(LocalDateTime.now()) + "_travelling_" + id + ".png";
            FileOutputStream fileOutput = new FileOutputStream(nameFile);
            fileOutput.write(file.getBytes());
            fileOutput.flush();

            File target = new File(nameFile);
            s3.uploadFile(target);
            target.delete();

            listNameFiles.add(nameFile);
        }

        return listNameFiles;
    }

    @Override
    public URL getURLFile(String keyFileName) throws Exception {
        return s3.getSingleURLFile(keyFileName);
    }

    @Override
    public List<URL> getURLFile(List<String> keyFileNames) throws Exception{
        return s3.getMultiURLFile(keyFileNames);
    }
}
