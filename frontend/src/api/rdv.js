import constants from "@/constants";
import axios from 'axios'
export default {
    async getRendezVous() {
        try {
            const response = await axios.get(constants.BACKEND_URL() + "/rdv");
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}



