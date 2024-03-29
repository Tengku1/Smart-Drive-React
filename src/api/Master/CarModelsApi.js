import axios from "axios";
import config from "../../configs/axios.config";

export class CarModelsApi {
    async getCarModels(page,size) {
        try {
            let result;
            if(!page) {
                result = await axios.get(`${config.smartDrive}/carm`);
            } else {
                result = await axios.get(`${config.smartDrive}/carm?page=${page}&size=${size}`);
            }
            
            return result.data;
        } catch (error) {
            return error;
        }
    }

    async getCarModelsByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/carm/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async createCarModels(payload) {
        try {
            const result = await axios.post(`${config.smartDrive}/carm`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }

    async updateCarModels(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/carm/${id}`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}