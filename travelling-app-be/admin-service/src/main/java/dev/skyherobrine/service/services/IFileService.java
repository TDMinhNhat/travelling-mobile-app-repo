package dev.skyherobrine.service.services;

import org.springframework.web.multipart.MultipartFile;
import java.net.URL;
import java.util.List;

public interface IFileService {
    String uploadFile(String id, MultipartFile file) throws Exception;

    List<String> uploadFile(String id, MultipartFile... files) throws Exception;

    URL getURLFile(String keyFileName) throws Exception;

    List<URL> getURLFile(List<String> keyFileNames) throws Exception;
}
