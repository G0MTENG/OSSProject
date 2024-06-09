import axios, { AxiosInstance } from 'axios'

const baseURL = 'http://100.28.109.194'

const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosInstance
