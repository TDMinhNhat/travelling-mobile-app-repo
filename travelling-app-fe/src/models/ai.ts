import axios from "axios";
import value from "../const/value";

const URL: string = `http://${value.IP_HOST}:8080/chat-ai/api/v1/message`
const aiModel = {
    generate: async (message: string, userId: string) => {
        const pathAPI = `${URL}/send`
        console.log(pathAPI)
        return await axios({
            method: "get",
            url: pathAPI,
            params: {
                message: message,
                userId: userId
            }
        }).then(response => response.data).catch(err => {
            console.log(err)
            return null;
        })
    },
    get: async (userId: string) => {
        const pathAPI = `${URL}/get`
        console.log(pathAPI)
        return await axios({
            method: "get",
            url: pathAPI,
            params: {
                userId: userId
            }
        }).then(response => response.data).catch(err => {
            console.log(err)
            return null;
        })
    }
}

export default aiModel;