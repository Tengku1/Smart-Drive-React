import axios from "axios";
import config from "../../configs/axios.config";

export class ProvinceApi {
    async getProvince() {
        try {
            const result = await axios.get(`${config.smartDrive}/provinsi`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/provinsi/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            console.log(payload);
            const result = await axios.post(`${config.smartDrive}/provinsi`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/provinsi/${id}`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}