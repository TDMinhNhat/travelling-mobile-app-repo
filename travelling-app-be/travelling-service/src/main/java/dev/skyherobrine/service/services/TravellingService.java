package dev.skyherobrine.service.services;

import dev.skyherobrine.service.feigns.UserClient;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mariadb.TravellingImage;
import dev.skyherobrine.service.models.mongodb.TravellingReview;
import dev.skyherobrine.service.repositories.mariadb.*;
import dev.skyherobrine.service.repositories.mongodb.TravellingDescribeRepository;
import dev.skyherobrine.service.repositories.mongodb.TravellingPolicyRepository;
import dev.skyherobrine.service.repositories.mongodb.TravellingReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TravellingService {

    private TravellingRepository tr;
    private TravellingServiceRepository tsr;
    private TravellingFacilityRepository tfr;
    private TravellingDescribeRepository tdr;
    private TravellingPolicyRepository tpr;
    private TravellingReviewRepository trr;
    private TravellingImageRepository tir;
    private ServiceRepository sr;
    private FacilityRepository fr;
    @Autowired
    private UserClient uc;

    public TravellingService(TravellingRepository tr, TravellingServiceRepository tsr, TravellingFacilityRepository tfr, TravellingDescribeRepository tdr, TravellingPolicyRepository tpr, TravellingReviewRepository trr, TravellingImageRepository tir, ServiceRepository sr, FacilityRepository fr) {
        this.tr = tr;
        this.tsr = tsr;
        this.tfr = tfr;
        this.tdr = tdr;
        this.tpr = tpr;
        this.trr = trr;
        this.tir = tir;
        this.sr = sr;
        this.fr = fr;
    }

    public List<Map<String,Object>> getFullInfoAllTravel() {
        List<Map<String,Object>> result = new ArrayList<>();
        List<TravellingReview> trs = trr.findAll();

        tr.findAll().forEach(target -> {
            Map<String,Object> data = new HashMap<>();
            data.put("travelling", target);
            data.put("service", tsr.findById_Travelling(target).stream().map(item -> item.getId().getService()));
            data.put("facility", tfr.findById_Travelling(target).stream().map(item -> item.getId().getFacility()));
            data.put("image", tir.findByTravelling(target).stream().map(item -> item.getImageUrl()));
            data.put("describe", tdr.findById(target.getId()).orElse(null));
            data.put("policy", tpr.findById(target.getId()).orElse(null));
            data.put("review", getUserInfoReview(trr.findByTravellingId(target.getId())));
            result.add(data);
        });

        return result;
    }

    public Map<String,Object> getInfoTravelId(String travelId) {
        Map<String,Object> data = new HashMap<>();

        Travelling target = tr.findById(travelId).orElse(null);
        if(target == null) return null;

        data.put("travelling", target);
        data.put("service", tsr.findById_Travelling(target).stream().map(item -> item.getId().getService()));
        data.put("facility", tfr.findById_Travelling(target).stream().map(item -> item.getId().getFacility()));
        data.put("image", tir.findByTravelling(target).stream().map(item -> item.getImageUrl()));
        data.put("describe", tdr.findById(target.getId()).orElse(null));
        data.put("policy", tpr.findById(target.getId()).orElse(null));
        data.put("review", getUserInfoReview(trr.findByTravellingId(target.getId())));

        return data;
    }

    private List<? extends Map> getUserInfoReview(List<TravellingReview> trs) {
        List<Map<String,Object>> data = new ArrayList<>();

        trs.forEach(target -> {
            Map<String,Object> item = new HashMap<>();
            item.put("review", target);
            item.put("user", uc.getUserById(Long.parseLong(target.getUserId())).getBody().getData());
            data.add(item);
        });

        return data;
    }
}
