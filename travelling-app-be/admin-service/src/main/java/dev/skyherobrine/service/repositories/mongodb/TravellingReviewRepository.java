package dev.skyherobrine.service.repositories.mongodb;

import dev.skyherobrine.service.models.mongodb.TravellingReview;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellingReviewRepository extends MongoRepository<TravellingReview, ObjectId> {
}
