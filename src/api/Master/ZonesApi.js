import axios from "axios";
import config from "../../configs/axios.config";

export class ZonesApi {
    async getZones(page,size) {
        try {
            let result;
            if(!page) {
                result = await axios.get(`${config.smartDrive}/zones`);
            } else {
                result = await axios.get(`${config.smartDrive}/zones?page=${page}&size=${size}`);
            }
            
            return result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/zones/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            console.log(payload);
            const result = await axios.post(`${config.smartDrive}/zones`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/zones/${id}`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}