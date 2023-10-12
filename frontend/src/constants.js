export default {
    PORT : 3000,
    ADDRESS : "10.60.115.107",
    BACKEND_URL() {
        return `http://${this.ADDRESS}:${this.PORT}`;
    },
}