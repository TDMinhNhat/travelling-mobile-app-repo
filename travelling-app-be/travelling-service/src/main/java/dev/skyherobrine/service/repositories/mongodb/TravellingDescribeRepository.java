package dev.skyherobrine.service.repositories.mongodb;

import dev.skyherobrine.service.models.mongodb.TravellingDescribe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellingDescribeRepository extends MongoRepository<TravellingDescribe,String> {
}
