import axios from "axios";
import value from "../const/value";

const URL: string = `http://${value.IP_HOST}:8080/booking/api/v1/book`

const booking = {
    setBooking: async (bookId: string, userId: number, travelId: string, dateTrip: Date, guestJoin: number, perDayNight: number, options: string, method: string, totalPrice: number) => {
        const pathAPI = URL
        console.log(pathAPI)
        return await axios({
            method: "post",
            url: pathAPI,
            data: {
                "bookId": bookId,
                "userId": userId,
                "travelId": travelId,
                "dateTrip": (dateTrip.getDate() < 10 ? "0" + dateTrip.getDate() : dateTrip.getDate()) + "-" + (dateTrip.getMonth() < 10 ? "0" + dateTrip.getMonth() : dateTrip.getMonth()) + "-" + dateTrip.getFullYear(),
                "guestJoin": guestJoin,
                "perDayNight": perDayNight,
                "options": options == "full" ? "FULL" : "A_PART",
                "method": method,
                "totalPrice": totalPrice
            }
        }).then(response => response.data).catch(err => {
            console.log(err)
            alert("Booking failed! Please contact to administrator to help.")
        })
    }
}

export default booking