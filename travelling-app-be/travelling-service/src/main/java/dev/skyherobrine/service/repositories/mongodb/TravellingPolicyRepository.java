package dev.skyherobrine.service.repositories.mongodb;

import dev.skyherobrine.service.models.mongodb.TravellingPolicy;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellingPolicyRepository extends MongoRepository<TravellingPolicy,String> {
}
