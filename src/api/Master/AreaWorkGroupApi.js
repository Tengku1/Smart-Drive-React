import axios from "axios";
import config from "../../configs/axios.config";

export class AreaWorkGroupApi {
    async getAreaWorkGroup(page,size) {
        try {
            const result = await axios.get(`${config.smartDrive}/arwg?page=${page}&size=${size}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async getByID(id) {
        try {
            const result = await axios.get(`${config.smartDrive}/arwg/${id}`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }

    async create(payload) {
        try {
            console.log(payload);
            const result = await axios.post(`${config.smartDrive}/arwg`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }

    async update(payload, id) {
        try {
            const result = await axios.put(`${config.smartDrive}/arwg/${id}`,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}