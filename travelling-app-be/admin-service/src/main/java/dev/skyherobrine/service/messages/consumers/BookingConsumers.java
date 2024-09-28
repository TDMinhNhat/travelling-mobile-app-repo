package dev.skyherobrine.service.messages.consumers;

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

import java.time.LocalDate;

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
        JsonNode node = mapper.readTree(data);
        String getBookingId = node.get("bookId").asText();
        String getUserId = node.get("userId").asText();
        String getTravellingId = node.get("travelId").asText();
        String[] getDateTrip = node.get("dateTrip").asText().split("-");
        Integer getGuestJoin = node.get("guestJoin").asInt();
        Integer getPerDayNight = node.get("perDayNight").asInt();
        PaymentOptions getPaymentOptions = PaymentOptions.valueOf(node.get("options").asText());
        PaymentMethod getPaymentMethod = PaymentMethod.valueOf(node.get("method").asText());
        String[] getBookingDate = node.get("bookingDate").asText().split("-");
        Double getTotalPrice = node.get("totalPrice").asDouble();

        User user = ur.findById(getUserId).orElse(null);
        Travelling travelling = tr.findById(getTravellingId).orElse(null);

        Booking booking = new Booking(
                getBookingId,
                user,
                travelling,
                LocalDate.of(Integer.parseInt(getDateTrip[2]), Integer.parseInt(getDateTrip[1]), Integer.parseInt(getDateTrip[0])),
                getGuestJoin,
                getPerDayNight,
                getPaymentOptions,
                getPaymentMethod,
                LocalDate.of(Integer.parseInt(getBookingDate[2]), Integer.parseInt(getBookingDate[1]), Integer.parseInt(getBookingDate[0])),
                getTotalPrice
        );
        br.save(booking);
    }
}
