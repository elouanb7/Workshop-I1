import constants from "@/constants";
import axios from 'axios'
export default {
    async getRendezVous() {
        try {
            console.log(constants.BACKEND_URL())
            const response = await axios.get(constants.BACKEND_URL() + "/rdv");
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}



