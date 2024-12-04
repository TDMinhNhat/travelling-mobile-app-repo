import axios from "axios";
import value from "../const/value";

const URL: string = `http://${value.IP_HOST}:8080/authenticate/api/v1`
const authenticateModel = {
    login: async (email: string, password: string) => {
        const pathAPI = `${URL}/login/${email}/${password}`
        console.log(pathAPI);
        return await axios({
            method: "post",
            url: pathAPI,
        }).then(response => {
            return response.data;
        }).catch(err => {
            console.log(err)
            return null;
        })
    },
    register: async (fullName: string, sex: boolean, birthDate: Date, email: string, userName: string, password: string, phone: string) => {
        const pathAPI = `${URL}/register`
        return await axios.post(pathAPI, {
                "fullName": fullName,
                "sex": sex,
                "birthDate": `${birthDate.getFullYear()}-${String(birthDate.getMonth()).padStart(2, '0')}-${String(birthDate.getDate()).padStart(2, '0')}`,
                "phone": phone,
                "email": email,
                "username": userName,
                "password": password
        }).then(response => {
            return response.data;
        }).catch(err => {
            console.log(err)
            alert("Something wrong in the server! Please contact the administrator!")
            return null;
        })
    },
    update: async (fullName: string, username: string, sex: boolean, birthDate: string, phone: string, email: string, address: string) => {
        const birthDateSplit = birthDate.split('-')
        return await axios({
            method: 'post',
            params: {
                fullName: fullName,
                username: username,
                sex: sex,
                birthDate: `${birthDateSplit[2]}-${birthDateSplit[1]}-${birthDateSplit[0]}`,
                phone: phone,
                email: email,
                address: address
            }
        }).then(response => response.data).catch(err => {
            console.log(err)
            alert("Something wrong in the server! Please contact the administrator!")
            return null;
        })
    }
}

export default authenticateModel;