import axios from 'axios';

const baseUrl = 'http://localhost:3050/api';

export const getAllCars = () => {
    return new Promise((resolve, _) => {
        axios.get(`${baseUrl}/cars`)
        .then((result) => {
            resolve(result.data);
        }).catch((err) => {
            console.log(err);
        });
    });
}

export const getCarById = (id) => {
    return new Promise((resolve, _) => {
        axios.get(`${baseUrl}/cars/${id}`)
        .then((result) => {
                resolve(result.data);
        }).catch((err) => {
            console.log(err);
        });
    });
}

export const addCar = (car) => {
    return new Promise((resolve, _) => {
        axios.post(`${baseUrl}/cars`, car)
        .then((result) => {
            if (result.status === 201) {
                resolve('ok');
            }
        }).catch((err) => {
            console.log(err);
        });
    });
};