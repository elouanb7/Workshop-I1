const catchAsync = require("../utils/catchAsync");
const {CREATED, NOT_FOUND, OK} = require("http-status");
const ApiError = require("../utils/ApiError");
const {rdvService} = require("../services");

const createRdv = catchAsync(async (req, res) => {
    const rdv = await rdvService.createRdv(req.body)
    res.status(CREATED).send(rdv);
})

const findRdvById = catchAsync(async (req, res) => {
    const rdv = await rdvService.findRdvById(req.params.rdvId);
    if (!rdv) {
        throw new ApiError(NOT_FOUND, 'rdv not found');
    }
    res.send(rdv);
})

const findAllRdv = catchAsync(async (req, res) => {
    const rdv = await rdvService.findAllRdv()
    res.send(rdv)
})

const updateRdv = catchAsync(async (req, res) => {
    const rdv = await rdvService.updateRdv(req.params.rdvId, req.body);
    res.send(rdv);
})

const deleteRdv = catchAsync(async (req, res) => {
    await rdvService.deleteRdv(req.params.rdvId);
    res.status(OK).send("Deleted rdv with id: " + req.params.rdvId);
})

module.exports =  {
    createRdv,
    findAllRdv,
    findRdvById,
    updateRdv,
    deleteRdv,
};