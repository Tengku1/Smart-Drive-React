import axios from "axios";
import config from "../../configs/axios.config";

export class InsuranceApi {
    async getInsurances() {
        try {
            const result = await axios.get(`${config.smartDrive}/inty`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
    
    async getInsuranceByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/inty/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
    
    async create(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/inty`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    
    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/inty/${id}`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}