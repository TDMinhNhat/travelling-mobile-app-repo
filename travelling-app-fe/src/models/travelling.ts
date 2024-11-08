import axios from "axios";

const API_URL: string = "http://192.168.100.9:8080/travelling/api/v1";

const travellingModel = {
    getAll: async () => {
        return await axios.get(`${API_URL}/travelling`)
    }
}

export default travellingModel;