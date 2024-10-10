package dev.skyherobrine.service.messages.consumers;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.models.mariadb.Service;
import dev.skyherobrine.service.repositories.mariadb.ServiceRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class ServiceConsumers {

    @Autowired
    private ServiceRepository sr;

    @KafkaListener(id = "admin-service", topics = "insert-service")
    public void insertService(String data) {
        try {
            log.info("Received message from insert-service topic");
            Service target = (Service) ObjectParser.jsonToObject(data, Service.class);
            log.info("Parser from json to Service object successfully");
            sr.save(target);
            log.info("Insert service successfully");
        } catch (Exception e) {
            log.error("Received message from insert-service topic - Error: " + e.getMessage());
        }
    }

    @KafkaListener(id = "service-insert-service_image", topics = "insert-service-image")
    public void insertServiceImage(String data) {
        Service target = (Service) ObjectParser.jsonToObject(data, Service.class);
        sr.save(target);
    }
}
