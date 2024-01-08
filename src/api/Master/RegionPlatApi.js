import axios from "axios";
import config from "../../configs/axios.config";

export class RegionPlatApi {
    async getRegp(page,size) {
        try {
            let result;
            if(!page) {
                result = await axios.get(`${config.smartDrive}/regp`);
            } else {
                result = await axios.get(`${config.smartDrive}/regp?page=${page}&size=${size}`);
            }
            
            return result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/regp/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/regp`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/regp/${id}`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}