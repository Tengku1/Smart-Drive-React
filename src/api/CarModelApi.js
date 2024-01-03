import axios from "axios"
import config from "../configs/axios.config";


const createRow = async(payload)=>{
    try {
        const result = await axios.post(`${config.smartdrive}/carm`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const findRow = async(id)=>{
    try {
        const result = await axios.get(`${config.smartdrive}/carm/${id}`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const allRow = async() => {
    try {
        const result = await axios.get(`${config.smartdrive}/carm`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const updateRow = async(data)=>{
    try {
        const result = await axios.put(`${config.smartdrive}/carm/${data.carmId}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

export default {
    allRow,
    createRow,
    findRow,
    updateRow
}