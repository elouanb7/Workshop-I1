const express = require('express');
const { rdvController } = require('../controllers');

const router = express.Router();

router
    .route('/')
    .post(rdvController.createRdv)
    .get(rdvController.findAllRdv);

router
    .route('/:rdvId')
    .get(rdvController.findRdvById)
    .patch(rdvController.updateRdv)
    .delete(rdvController.deleteRdv);

module.exports = router;