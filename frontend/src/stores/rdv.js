import {defineStore} from 'pinia';
import rdvApi from '@/api/rdv.js';

export const useRdvStore = defineStore('rdv', {
    state: () => ({
        rdv: null,
    }),
    getters: {},
    actions: {
        async getRdv() {
            // Clear the existing rdv data (if any) to force a new fetch
            this.rdv = null;

            try {
                const data = await rdvApi.getRendezVous();
                this.rdv = data; // Update the rdv state with the retrieved data
            } catch (error) {
                console.error('Error fetching rdv:', error);
            }
        },
    },
});