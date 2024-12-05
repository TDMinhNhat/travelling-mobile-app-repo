import axios from "axios";
import value from "../const/value";

const URL: string = `http://${value.IP_HOST}:8080/travelling/api/v1`;

const travellingModel = {
    getAll: async () => {
        const pathAPI = `${URL}/travelling`
        console.log(pathAPI)
        return await axios.get(pathAPI)
    }
}

export default travellingModel;