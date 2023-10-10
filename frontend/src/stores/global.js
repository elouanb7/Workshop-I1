import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        currentTheme: 'dark',
    }),
    getters: {
        getCurrentTheme() {
            return this.currentTheme;
        },
    },
    actions: {
        toggleTheme() {
            this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.currentTheme);
        },
    },
});