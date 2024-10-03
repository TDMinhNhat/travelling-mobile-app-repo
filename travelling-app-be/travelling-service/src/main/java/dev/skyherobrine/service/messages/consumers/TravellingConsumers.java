package dev.skyherobrine.service.messages.consumers;

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
    public void insertTravelling(String data) {
        Map<String,Object> target = (Map<String, Object>) ObjectParser.jsonToObject(data, Map.class);
        Travelling travelling = (Travelling) target.get("travelling");
        TravellingDescribe travellingDescribe = (TravellingDescribe) target.get("travellingDescribe");
        TravellingPolicy travellingPolicy = (TravellingPolicy) target.get("travellingPolicy");
        List<TravellingService> travellingServices = (List<TravellingService>) target.get("travellingServices");
        List<TravellingFacility> travellingPolicies = (List<TravellingFacility>) target.get("travellingFacilities");

        tr.save(travelling);
        tdr.save(travellingDescribe);
        tpr.save(travellingPolicy);
        tsr.saveAll(travellingServices);
        tfr.saveAll(travellingPolicies);
    }
}
