import axios from "axios";


const instance = axios.create({
    baseURL: "https://react-my-sandwich-320a9.firebaseio.com/"
});

export default instance;