import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
    key:'71f46c70253e4914bf226657144c6cbd'}
})