import axios, { AxiosInstance } from 'axios'

const baseURL = 'http://0.0.0.0:8000/'

const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosInstance
