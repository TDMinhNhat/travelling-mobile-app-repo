package dev.skyherobrine.service.dtos;

import dev.skyherobrine.service.enums.TravellingType;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mongodb.TravellingDescribe;
import dev.skyherobrine.service.models.mongodb.TravellingPolicy;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@Getter
public class TravellingDTO {
    private String travelId;
    private String travelName;
    private String travelType;
    private Integer guest;
    private Integer bedroom;
    private Integer bed;
    private Integer bathroom;
    private Double pricePerNight;
    private String address;
    private List<String> services;
    private List<String> facilities;
    private String description;
    private List<String> specific;
    private List<TravellingPolicy.Policy> policies;

    public Travelling toTravellingObject() {
        return new Travelling(
                travelId,
                travelName,
                TravellingType.valueOf(travelType),
                guest,
                bedroom,
                bed,
                bathroom,
                pricePerNight,
                address
        );
    }

    public TravellingPolicy toTravellingPolicyObject() {
        return new TravellingPolicy(
                travelId,
                policies
        );
    }

    public TravellingDescribe toTravellingDescribeObject() {
        return new TravellingDescribe(
                travelId,
                description,
                specific,
                LocalDate.now(),
                LocalDate.now()
        );
    }
}
