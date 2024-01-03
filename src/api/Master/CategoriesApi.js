import axios from "axios";
import config from "../../configs/axios.config";

export class CategoriesApi {
    async getCategories() {
        try {
            const result = await axios.get(`${config.smartDrive}/category`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}