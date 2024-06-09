import axios, { AxiosInstance } from 'axios'

const baseURL = 'http://35.173.120.145:8080/'

const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosInstance
