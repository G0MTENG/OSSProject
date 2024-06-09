import axios, { AxiosInstance } from 'axios'

const baseURL = 'http://44.220.132.251'

const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosInstance
