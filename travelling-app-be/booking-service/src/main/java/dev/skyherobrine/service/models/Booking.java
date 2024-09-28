package dev.skyherobrine.service.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import dev.skyherobrine.service.enums.PaymentMethod;
import dev.skyherobrine.service.enums.PaymentOptions;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity @Table(name = "booking")
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class Booking {
    @Id @Column(name = "book_id", length = 50, nullable = false) @NonNull
    private String bookId;
    @Column(name = "user_id", length = 15, nullable = false) @NonNull
    private String userId;
    @Column(name = "travel_id", length = 15, nullable = false) @NonNull
    private String travelId;
    @Column(name = "date_trip", nullable = false) @NonNull
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateTrip;
    @Column(name = "guest_join", nullable = false) @NonNull
    private Integer guestJoin;
    @Column(name = "per_day_night", nullable = false) @NonNull
    private Integer perDayNight;
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_options", nullable = false) @NonNull
    private PaymentOptions options;
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method", nullable = false) @NonNull
    private PaymentMethod method;
    @Column(name = "booking_date", nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate bookingDate;
    @Column(name = "total_price", nullable = false) @NonNull
    private Double totalPrice;

    @PrePersist
    public void onPersist() {
        bookingDate = LocalDate.now();
    }
}
