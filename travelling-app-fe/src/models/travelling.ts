import axios from "axios";

const HOST = process.env.IP_HOST
const URL: string = `http://${HOST}:8080/travelling/api/v1`;

const travellingModel = {
    getAll: async () => {
        return await axios.get(`${URL}/travelling`)
    }
}

export default travellingModel;