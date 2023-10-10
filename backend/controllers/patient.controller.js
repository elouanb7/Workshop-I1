const catchAsync = require("../utils/catchAsync");
const {CREATED, NOT_FOUND, OK} = require("http-status");
const ApiError = require("../utils/ApiError");
const {patientService} = require("../services");

const createPatient = catchAsync(async (req, res) => {
    const patient = await patientService.createPatient(req.body)
    res.status(CREATED).send(patient);
})

const findPatientById = catchAsync(async (req, res) => {
    const patient = await patientService.findPatientById(req.params.patientId);
    if (!patient) {
        throw new ApiError(NOT_FOUND, 'patient not found');
    }
    res.send(patient);
})

const findAllPatient = catchAsync(async (req, res) => {
    const patient = await patientService.findAllPatient()
    res.send(patient)
})

const updatePatient = catchAsync(async (req, res) => {
    const patient = await patientService.updatePatient(req.params.patientId, req.body);
    res.send(patient);
})

const deletePatient = catchAsync(async (req, res) => {
    await patientService.deletePatient(req.params.patientId);
    res.status(OK).send("Deleted patient with id: " + req.params.patientId);
})

module.exports =  {
    createPatient,
    findAllPatient,
    findPatientById,
    updatePatient,
    deletePatient,
};