package dev.skyherobrine.service.dtos;

import dev.skyherobrine.service.models.mariadb.Service;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
public class ServiceDTO {
    private String serviceName;
    private String serviceType;

    public Service toObject() {
        return new Service(serviceName, serviceType);
    }
}
