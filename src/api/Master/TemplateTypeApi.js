import axios from "axios";
import config from "../../configs/axios.config";

export class TemplateTypeApi {
    async getTety(page,size) {
        try {
            let result;
            if(!page) {
                result = await axios.get(`${config.smartDrive}/tety`);
            } else {
                result = await axios.get(`${config.smartDrive}/tety?page=${page}&size=${size}`);
            }
            
            return result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/tety/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/tety`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/tety/${id}`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}