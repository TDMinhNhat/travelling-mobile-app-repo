import axios from "axios";

const HOST = process.env.IP_HOST
const URL: string = `http://${HOST}:10000/travelling/api/v1`;

const travellingModel = {
    getAll: async () => {
        return await axios.get(`${URL}/travelling`)
    }
}

export default travellingModel;