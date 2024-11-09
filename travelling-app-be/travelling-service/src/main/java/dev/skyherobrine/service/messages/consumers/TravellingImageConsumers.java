package dev.skyherobrine.service.messages.consumers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.models.mariadb.TravellingImage;
import dev.skyherobrine.service.repositories.mariadb.TravellingImageRepository;
import dev.skyherobrine.service.repositories.mariadb.TravellingRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TravellingImageConsumers {

    private TravellingImageRepository tir;
    private ObjectMapper objectMapper = new ObjectMapper();

    public TravellingImageConsumers(TravellingImageRepository tir) {
        this.tir = tir;
    }

    @KafkaListener(id = "travelling-insert-travelling-image", topics = "insert-travelling-image")
    public void insertTravellingImage(String data) throws Exception {
        List<TravellingImage> travellingImages = objectMapper.readValue(data, new TypeReference<List<TravellingImage>>() {});
        tir.saveAll(travellingImages);
    }
}
