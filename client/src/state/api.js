import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/',
})
const unwrapResponseData = resp => resp.data

const endpoints = {
  ALL_PLANETS: '/planets',
}

export const requestPlanets = () => {
  return instance
    .get(endpoints.ALL_PLANETS)
    .then(unwrapResponseData)
}