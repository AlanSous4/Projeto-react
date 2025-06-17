import axios from "axios";

const api = axios.create({
    baseURL:'https://projeto-react-backand.onrender.com'
})

export default api