package dev.skyherobrine.service.services;

import org.springframework.web.multipart.MultipartFile;
import java.net.URL;

public interface IFileService {
    String uploadFile(MultipartFile file) throws Exception;

    String[] uploadFile(MultipartFile... files) throws Exception;

    URL getURIFile(String keyFileName) throws Exception;

    URL[] getURIFile(String... keyFileNames) throws Exception;
}
