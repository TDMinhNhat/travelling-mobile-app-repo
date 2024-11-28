package dev.skyherobrine.service.services;

import dev.skyherobrine.service.feigns.TravellingFeign;
import dev.skyherobrine.service.models.FavoriteTravel;
import dev.skyherobrine.service.repositories.FavoriteTravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class FavoriteTravellingService {
    @Autowired
    private FavoriteTravelRepository ftr;
    @Autowired
    private TravellingFeign tf;

    public List<Object> getAllFavoriteTravelling(String userId) {
        List<Object> results = new ArrayList<>();
        List<FavoriteTravel> favoriteTravels = ftr.findById_UserId(userId);

        favoriteTravels.forEach(target -> {
            Object object = tf.getTravellingById(target.getId().getTravelId()).getBody().getData();
            results.add(object);
        });

        return results;
    }
}
