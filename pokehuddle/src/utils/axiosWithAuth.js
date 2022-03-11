import axios from "axios";

//returns new instance of axios with the config object built into it
export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("pokehuddle-token")
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
        },
        baseURL: "https://masters-pokehuddlerest.herokuapp.com/"
    })
}
