import axios from "axios";
import config from "../../configs/axios.config";

export class CarBrandsApi {
    async getCarBrands(page,size) {
        try {
            const result = await axios.get(`${config.smartDrive}/carb?page=${page}&size=${size}`);
            return result.data;
        } catch (error) {
            return error;
        }
    }

    async getCarBrandsByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/carb/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async createCarBrands(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/carb`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }

    async updateCarBrands(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/carb/${id}`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}