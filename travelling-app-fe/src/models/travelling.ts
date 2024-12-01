import axios from "axios";

const HOST = process.env.IP_HOST
const URL: string = `http://${HOST}:8080/travelling/api/v1`;

const travellingModel = {
    getAll: async () => {
        const pathAPI = `${URL}/travelling`
        console.log(pathAPI)
        return await axios.get(pathAPI)
    }
}

export default travellingModel;