import constants from "@/constants";
import axios from 'axios'
export default {
    async postPatient(patient) {
        try {
            const response = await axios.post(constants.BACKEND_URL() + "/patient", patient);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}



