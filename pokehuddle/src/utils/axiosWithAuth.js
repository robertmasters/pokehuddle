import axios from "axios";

//returns new instance of axios with the config object built into it
export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("pokehuddle-token")
    return axios.create({
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
        },
        baseURL: "https://masters-pokehuddlerest.herokuapp.com/"
        // baseURL: "http://localhost:2019",

        
    })
}
