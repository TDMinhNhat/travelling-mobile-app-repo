package dev.skyherobrine.service.models.mongodb;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "travelling_policy")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class TravellingPolicy {
    @Id
    private String travellingId;
    private List<Policy> policies;

    @Getter @Setter @AllArgsConstructor
    public static class Policy {
        private String policyName;
        private List<String> policyDetails;
        private String description;
    }
}
