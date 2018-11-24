import axios from "axios";


export function simpleGet(URL){
    return axios.get(URL)
        .then(function (response) {
            // console.log(response.data);
            return response.data.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}