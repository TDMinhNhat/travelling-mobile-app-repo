package dev.skyherobrine.service.models.mariadb;

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
    @ManyToOne @JoinColumn(name = "user_id", nullable = false) @NonNull
    private User userId;
    @ManyToOne @JoinColumn(name = "travel_id", nullable = false) @NonNull
    private Travelling travelId;
    @Column(name = "date_trip", nullable = false) @NonNull
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
    private LocalDate bookingDate;
    @Column(name = "total_price", nullable = false) @NonNull
    private Double totalPrice;

    @PrePersist
    public void onPersist() {
        bookingDate = LocalDate.now();
    }
}
