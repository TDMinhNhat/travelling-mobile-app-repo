package dev.skyherobrine.service.messages.consumers;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.enums.PaymentMethod;
import dev.skyherobrine.service.enums.PaymentOptions;
import dev.skyherobrine.service.models.mariadb.Booking;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mariadb.User;
import dev.skyherobrine.service.repositories.mariadb.BookingRepository;
import dev.skyherobrine.service.repositories.mariadb.TravellingRepository;
import dev.skyherobrine.service.repositories.mariadb.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.util.Map;

@Component
public class BookingConsumers {

    @Autowired
    private UserRepository ur;
    @Autowired
    private TravellingRepository tr;
    @Autowired
    private BookingRepository br;
    @Autowired
    private ObjectMapper mapper;

    @KafkaListener(id = "admin-insert-booking", topics = "insert-booking")
    public void insertBooking(String data) throws Exception{
        Object result = mapper.readValue(data, new TypeReference<Object>() {
            @Override
            public Type getType() {
                return super.getType();
            }
        });
        JsonNode node = mapper.readTree(result.toString());
        String[] getDateTrip = node.get("dateTrip").asText().split("-");
        Booking booking = new Booking();
        booking.setBookId(node.get("bookId").asText());
        booking.setUserId(ur.findById(node.get("userId").asText()).orElse(null));
        booking.setTravelId(tr.findById(node.get("travelId").asText()).orElse(null));
        booking.setDateTrip(LocalDate.of(Integer.parseInt(getDateTrip[2]), Integer.parseInt(getDateTrip[1]), Integer.parseInt(getDateTrip[0])));
        booking.setGuestJoin(node.get("guestJoin").asInt());
        booking.setPerDayNight(node.get("perDayNight").asInt());
        booking.setOptions(PaymentOptions.valueOf(node.get("options").asText()));
        booking.setMethod(PaymentMethod.valueOf(node.get("method").asText()));
        booking.setTotalPrice(node.get("totalPrice").asDouble());
        br.save(booking);
    }
}
