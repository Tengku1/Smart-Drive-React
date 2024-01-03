import axios from "axios";
import config from "../../configs/axios.config";

export class CitiesApi {
    async getCities() {
        try {
            const result = await axios.get(`${config.smartDrive}/cities`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}