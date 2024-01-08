import axios from "axios";
import config from "../../configs/axios.config";

export class CitiesApi {
    async getCities(page,size) {
        try {
            let result;
            if(!page) {
                result = await axios.get(`${config.smartDrive}/cities`);
            } else {
                result = await axios.get(`${config.smartDrive}/cities?page=${page}&size=${size}`);
            }
            
            return result.data;
        } catch (error) {
            return error;
        }
    }

    async getbyID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/cities/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/cities`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/cities/${id}`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}