import axios from "axios";
import value from "../const/value";

const URL: string = `http://${value.IP_HOST}:8080/favorite/api/v1`

const favoriteModel = {
    getFavorites: async (userId: number) => {
        const pathAPI = `${URL}/favorite/${userId}`
        console.log(pathAPI)
        return await axios.get(pathAPI).then(response => response.data).catch(err => {
            console.log(err)
        })
    },
    addFavorite: async (userId: number, travelId: string) => {
        const pathAPI = `${URL}/favorite`
        console.log(pathAPI)
        return await axios({
            method: 'post',
            url: pathAPI,
            params: {
                userId: userId,
                travelId: travelId
            }
        }).then(response => response.data).catch(err => {
            console.log(err)
        })  
    },
    removeFavorite: async (userId: number, travelId: string) => {
        const pathAPI = `${URL}/favorite`
        console.log(pathAPI)
        return await axios({
            method: 'delete',
            url: pathAPI,
            params: {
                userId: userId,
                travelId: travelId
            }
        }).then(response => response.data).catch(err => {
            console.log(err)
        })
    }
}

export default favoriteModel;