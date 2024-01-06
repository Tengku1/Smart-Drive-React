import axios from "axios";
import config from "../../configs/axios.config";

export class CategoriesApi {
    async getCategories() {
        try {
            const result = await axios.get(`${config.smartDrive}/category`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
    
    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/category/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/category`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/category/${id}`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}