package dev.skyherobrine.service.messages.consumers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mariadb.TravellingFacility;
import dev.skyherobrine.service.models.mariadb.TravellingService;
import dev.skyherobrine.service.models.mongodb.TravellingDescribe;
import dev.skyherobrine.service.models.mongodb.TravellingPolicy;
import dev.skyherobrine.service.repositories.mariadb.TravellingFacilityRepository;
import dev.skyherobrine.service.repositories.mariadb.TravellingRepository;
import dev.skyherobrine.service.repositories.mariadb.TravellingServiceRepository;
import dev.skyherobrine.service.repositories.mongodb.TravellingDescribeRepository;
import dev.skyherobrine.service.repositories.mongodb.TravellingPolicyRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class TravellingConsumers {

    private TravellingRepository tr;
    private TravellingDescribeRepository tdr;
    private TravellingPolicyRepository tpr;
    private TravellingServiceRepository tsr;
    private TravellingFacilityRepository tfr;

    public TravellingConsumers(TravellingRepository tr, TravellingDescribeRepository tdr, TravellingPolicyRepository tpr, TravellingServiceRepository tsr, TravellingFacilityRepository tfr) {
        this.tr = tr;
        this.tdr = tdr;
        this.tpr = tpr;
        this.tsr = tsr;
        this.tfr = tfr;
    }

    @KafkaListener(id = "travelling-insert-travelling", topics = "insert-travelling")
    public void insertTravelling(String data) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> target = mapper.readValue(data, new TypeReference<Map<String,Object>>() {});

        Travelling travelling = mapper.convertValue((target.get("travelling")), Travelling.class);
        TravellingDescribe travellingDescribe = mapper.convertValue((target.get("travellingDescribe")), TravellingDescribe.class);
        TravellingPolicy travellingPolicy = mapper.convertValue((target.get("travellingPolicy")), TravellingPolicy.class);
        List<TravellingService> travellingServices = mapper.convertValue((target.get("travellingServices")), new TypeReference<List<TravellingService>>() {});
        List<TravellingFacility> travellingFacilities = mapper.convertValue((target.get("travellingFacilities")), new TypeReference<List<TravellingFacility>>() {});

        tr.save(travelling);
        tdr.save(travellingDescribe);
        tpr.save(travellingPolicy);
        tsr.saveAll(travellingServices);
        tfr.saveAll(travellingFacilities);
    }
}
