package dev.skyherobrine.service.dtos;

import dev.skyherobrine.service.models.mariadb.Service;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ServiceDTO {
    private String serviceName;
    private String serviceType;

    public Service toObject() {
        return new Service(serviceName, serviceType);
    }
}
