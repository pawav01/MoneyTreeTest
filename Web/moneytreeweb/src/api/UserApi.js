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

export const createAccount = async (accountName) => {
    var data = fetch('http://localhost:4000/users/3/accounts', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(accountName)
        })
        .then(response => response.json())
        .then(response => {
            return response[0];
        })
        .catch(err => console.error(err));
    return data;
}

export const deleteAccount = async (accountId) => {
    var data = fetch('http://localhost:4000/users/3/accounts/' + accountId, { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response => {
            return response[0];
        })
        .catch(err => console.error(err));
    return data;
}