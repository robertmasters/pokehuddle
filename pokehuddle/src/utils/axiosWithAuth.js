import axios from "axios";

//returns new instance of axios with the config object built into it.
export const axiosWithAuth = () => {
    const localURL = process.env.REACT_APP_API_URL
    let baseUrl = null
    console.log("localURL: ",localURL)
    if (URL ) {
        baseUrl = localURL
    } else {
        baseUrl = "https://masters-pokehuddlerest.herokuapp.com"
    }
    const token = JSON.parse(window.localStorage.getItem("pokehuddle-token"))
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
        },
        baseURL: "https://masters-pokehuddlerest.herokuapp.com"
    })
}
