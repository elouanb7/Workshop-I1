const express = require('express');
const { patientController } = require('../controllers');

const router = express.Router();

router
    .route('/')
    .post(patientController.createPatient)
    .get(patientController.findAllPatient);

router
    .route('/:patientId')
    .get(patientController.findPatientById)
    .patch(patientController.updatePatient)
    .delete(patientController.deletePatient);

module.exports = router;