import axios from "axios"
import config from "../configs/axios.config";


const createRow = async(payload)=>{
    try {
        const result = await axios.post(`${config.smartdrive}/category/`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const findRow = async(id)=>{
    try {
        const result = await axios.get(`${config.smartdrive}/category/${id})`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const updateRow = async(data)=>{
    try {
        const result = await axios.put(`${config.smartdrive}/category/${data.cate_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

export default {
    createRow,
    findRow,
    updateRow
}