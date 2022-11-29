import { useContext } from "react";

export const getUserData = async() => {

    var data = fetch('http://localhost:4000/users/3')
        .then(response => response.json())
        .then(response => {
            return response[0];
        })
        .catch(err => console.error(err));
    
    return data;
    }
