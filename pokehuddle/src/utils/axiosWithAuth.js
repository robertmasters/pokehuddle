import axios from "axios";

//returns new instance of axios with the config object built into it
export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token")
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
        },
        // baseURL: "http://masters-pokehuddlerest.herokuapp.com/",
        baseURL: "http://localhost:2019",

        
    })
}
