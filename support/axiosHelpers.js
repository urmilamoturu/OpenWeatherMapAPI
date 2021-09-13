import axios from 'axios';

export const postRequest = async(URI,header,body,baseUrl)=>{
    return axios({
        method: "POST",
        headers: header,
        url:URI,
        timeout:60000,
        baseURL:baseUrl,
        data:body
    });
};

export const getRequest = async(URI,header,baseUrl)=>{
    return axios({
        method: "GET",
        headers: header,
        url:URI,
        timeout:60000,
        baseURL:baseUrl
    });
};