package dev.skyherobrine.service.messages.consumers;

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

    public TravellingImageConsumers(TravellingImageRepository tir) {
        this.tir = tir;
    }

    @KafkaListener(id = "travelling-insert-travelling-image", topics = "insert-travelling-image")
    public void insertTravellingImage(String data) {
        List<TravellingImage> travellingImages = (List<TravellingImage>) ObjectParser.jsonToObject(data, List.class);

        tir.saveAll(travellingImages);
    }
}
