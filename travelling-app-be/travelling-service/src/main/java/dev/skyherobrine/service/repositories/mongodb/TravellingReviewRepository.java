package dev.skyherobrine.service.repositories.mongodb;

import dev.skyherobrine.service.models.mongodb.TravellingReview;
import org.bson.types.ObjectId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravellingReviewRepository extends MongoRepository<TravellingReview, ObjectId> {
    List<TravellingReview> findByTravellingId(String travellingId);
}
