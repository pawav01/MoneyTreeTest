import { useContext } from "react";

export const getUserData = async () => {

    var data = fetch('http://localhost:4000/users/3')
        .then(response => response.json())
        .then(response => {
            return response[0];
        })
        .catch(err => console.error(err));

    return data;
}

export const createUser = async (newUser) => {
    console.log(" ++++ " + JSON.stringify(newUser));
    var data = fetch('http://localhost:4000/users', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(response => {
            return response[0];
        })
        .catch(err => console.error(err));

    return data;
}