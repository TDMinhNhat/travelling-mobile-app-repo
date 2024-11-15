import axios from "axios";

const HOST = process.env.IP_HOST
const URL: string = `http://${HOST}:8080/authenticate/api/v1`

const authenticateModel = {
    login: async (email: string, password: string) => {
        return await axios({
            method: "post",
            url: `${URL}/login/${email}/${password}`,
        }).then(response => {
            console.log(response.data)
            return response.data;
        }).catch(err => {
            console.log(err)
            return null;
        })
    },
    register: async (fullName: string, sex: boolean, birthDate: Date, email: string, userName: string, password: string, phone: string) => {
        return await axios.post(`${URL}/register`, {
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
    }
}

export default authenticateModel;