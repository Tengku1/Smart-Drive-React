import axios from "axios";
import config from "../../configs/axios.config";

export class TemplateInsurancePremiApi {
    async getTemi() {
        try {
            const result = await axios.get(`${config.smartDrive}/temi`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/temi/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            console.log(payload)
            const result = await axios.post(`${config.smartDrive}/temi`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/temi/${id}`, payload);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}