package dev.skyherobrine.service.messages.consumers;

import dev.skyherobrine.service.models.mariadb.Facility;
import dev.skyherobrine.service.models.mariadb.Service;
import dev.skyherobrine.service.repositories.mariadb.FacilityRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class FacilityConsumers {

    @Autowired
    private FacilityRepository fr;

    @KafkaListener(id = "travelling-insert-service", topics = "insert-facility")
    public void insertFacility(String data) {
        try {
            log.info("Received message from insert-service topic");
            Facility target = (Facility) ObjectParser.jsonToObject(data, Facility.class);
            log.info("Parser from json to Facility object successfully");
            fr.save(target);
            log.info("Insert service successfully");
        } catch (Exception e) {
            log.error("Received message from insert-service topic - Error: " + e.getMessage());
        }
    }

    @KafkaListener(id = "facility-insert-facility_image", topics = "insert-facility-image")
    public void insertFacilityImage(String data) {
        Facility target = (Facility) ObjectParser.jsonToObject(data, Facility.class);
        fr.save(target);
    }
}
