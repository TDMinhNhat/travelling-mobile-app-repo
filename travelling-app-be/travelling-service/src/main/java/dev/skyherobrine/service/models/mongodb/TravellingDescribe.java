package dev.skyherobrine.service.models.mongodb;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Document(collection = "travelling_describe")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class TravellingDescribe {
    @Id
    private String travellingId;
    private String description;
    private List<String> specific;
    private LocalDate dateCreated;
    private LocalDate dateModified;
}
