import Axios from 'axios';
const { config } = require('../config');

export const getUsers = () => {
    Axios.get(`${config.API_URL}/users`).then( response => {
        console.log(response);
        return response;});
};

export const getUser = () => {

};

export const createUser = () => {

};

export const deleteUser = () => {

};