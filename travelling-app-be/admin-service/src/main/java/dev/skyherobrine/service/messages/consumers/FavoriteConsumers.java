package dev.skyherobrine.service.messages.consumers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.models.mariadb.FavoriteTravel;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mariadb.User;
import dev.skyherobrine.service.repositories.mariadb.FavoriteTravelRepository;
import dev.skyherobrine.service.repositories.mariadb.TravellingRepository;
import dev.skyherobrine.service.repositories.mariadb.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class FavoriteConsumers {

    @Autowired
    private UserRepository ur;
    @Autowired
    private TravellingRepository tr;
    @Autowired
    private FavoriteTravelRepository ftr;
    @Autowired
    private ObjectMapper mapper;

    @KafkaListener(id = "admin-insert-favorite", topics = "insert-favorite")
    public void insertFavorite(String data) throws Exception{
        JsonNode node = mapper.readTree(data);
        String getUserId = node.get("userId").asText();
        String travelId = node.get("travelId").asText();

        User user = ur.findById(getUserId).orElse(null);
        Travelling travelling = tr.findById(travelId).orElse(null);

        FavoriteTravel ft = new FavoriteTravel(new FavoriteTravel.FavoriteTravelID(user, travelling));
        ftr.save(ft);
    }

    @KafkaListener(id = "admin-delete-favorite", topics = "delete-favorite")
    public void deleteFavorite(String data) throws Exception{
        JsonNode node = mapper.readTree(data);
        String getUserId = node.get("userId").asText();
        String travelId = node.get("travelId").asText();

        User user = ur.findById(getUserId).orElse(null);
        Travelling travelling = tr.findById(travelId).orElse(null);

        ftr.deleteById(new FavoriteTravel.FavoriteTravelID(user, travelling));
    }
}
