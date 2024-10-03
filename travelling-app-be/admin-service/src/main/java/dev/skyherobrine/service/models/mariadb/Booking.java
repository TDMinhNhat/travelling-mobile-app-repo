package dev.skyherobrine.service.models.mariadb;

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
    @ManyToOne @JoinColumn(name = "user_id", nullable = false) @NonNull
    private User userId;
    @ManyToOne @JoinColumn(name = "travel_id", nullable = false) @NonNull
    private Travelling travelId;
    @Column(name = "date_trip", nullable = false) @NonNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate bookingDate;
    @Column(name = "total_price", nullable = false) @NonNull
    private Double totalPrice;

    public Booking(@NonNull String bookId, @NonNull User userId, @NonNull Travelling travelId, @NonNull LocalDate dateTrip, @NonNull Integer guestJoin, @NonNull Integer perDayNight, @NonNull PaymentOptions options, @NonNull PaymentMethod method, LocalDate bookingDate, @NonNull Double totalPrice) {
        this.bookId = bookId;
        this.userId = userId;
        this.travelId = travelId;
        this.dateTrip = dateTrip;
        this.guestJoin = guestJoin;
        this.perDayNight = perDayNight;
        this.options = options;
        this.method = method;
        this.bookingDate = bookingDate;
        this.totalPrice = totalPrice;
    }
}
