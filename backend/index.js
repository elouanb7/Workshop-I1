const dotenv = require('dotenv');
const http = require("http")
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const sequelize = require('./config/DB_connection')
const Rdv = require("./models/rdv");
const Patient = require("./models/patient");

dotenv.config();

// normalizing port
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    // si c'est pas un int on le convertie
    if (port >= 0) {
        return port;
    }
    return false
}

const port = normalizePort(process.env.PORT || '3000');

// server error handler
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            logger.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// starting server
let server;
sequelize.authenticate()
    .then(async () => {
        await sequelize.sync({
            alter: false,
            // force: true,
        })
        logger.info('Connected to PostgreSQL');
        server = http.createServer(app).listen(config.port)
        server.on('error', errorHandler);
        server.on('listening', () => {
            const address = server.address();
            const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
            logger.info('Listening on ' + bind);
        });

    })

// process handler
const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

//process handling
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});

// database relations
Rdv.hasMany(Patient, {foreignKey: 'rdvId'})
Patient.belongsTo(Rdv)