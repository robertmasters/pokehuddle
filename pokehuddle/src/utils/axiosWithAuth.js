import axios from "axios";

//returns new instance of axios with the config object built into it
export const axiosWithAuth = () => {
    
    return axios.create({
        headers: {
            Authorization: JSON.parse(window.localStorage.getItem('token')),
        },
        baseURL: process.env.REACT_APP_LOCAL_API,
    })
}