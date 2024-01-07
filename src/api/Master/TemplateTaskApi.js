import axios from "axios";
import config from "../../configs/axios.config";

export class TemplateTaskApi {
    async getRegp() {
        try {
            const result = await axios.get(`${config.smartDrive}/testa`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/testa/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/testa`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/testa/${id}`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}