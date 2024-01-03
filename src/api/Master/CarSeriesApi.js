import axios from "axios";
import config from "../../configs/axios.config";

export class CarSeriesApi {
    async getCarSeries() {
        try {
            const result = await axios.get(`${config.smartDrive}/cars`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async getCarSeriesByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/cars/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async createCarSeries(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/cars`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }

    async updateCarSeries(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/cars/${id}`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}