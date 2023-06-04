import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T>{
    count: number;  
      next: string | null ;
    results: T[];
  }
const axiosInstance= axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
    key:'71f46c70253e4914bf226657144c6cbd'}
});

class APIClient<T>{
endpoint: string;

constructor(endpoint:string){
    this.endpoint=endpoint;
}

getAll=(config: AxiosRequestConfig)=>{

    return axiosInstance.get<FetchResponse<T>>(this.endpoint,config)
    .then(res=>res.data)
}

}

export default APIClient;
