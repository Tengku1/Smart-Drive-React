import axios from "axios";
import config from "../../configs/axios.config";

export class InboxMessagingApi {
    async getInboxMessaging() {
        try {
            const result = await axios.get(`${config.smartDrive}/ibme`);
            return  result.data;
        } catch (error) {
            return error;
        }
    }
}