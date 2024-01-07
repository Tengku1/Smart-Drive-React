import axios from "axios";
import config from "../../configs/axios.config";

export class TemplateWorkOrderApi {
    async getTewo() {
        try {
            const result = await axios.get(`${config.smartDrive}/tewo`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/tewo/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/tewo`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/tewo/${id}`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}