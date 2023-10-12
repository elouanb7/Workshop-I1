export default {
    PORT : 3000,
    ADDRESS : "10.0.3.21",
    BACKEND_URL() {
        return `http://${this.ADDRESS}:${this.PORT}`;
    },
}