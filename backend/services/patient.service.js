const Patient = require("../models/patient");

const createPatient = async (patientBody) => {
    return Patient.create( {
        email: patientBody.email,
        prenom: patientBody.prenom,
        nom: patientBody.nom,
        rdvId: patientBody.rdvId
    })
}

const findPatientById = async (id) => {
    return Patient.findOne({
        where: {
            id: id
        }
    })
}

const findAllPatient = async () => {
    return Patient.findAll()
}

const updatePatient = async (id, updatePatientBody) => {
    return Patient.update(updatePatientBody, {
        where: {
            id: id
        }
    });
};

const deletePatient = async (id) => {
    return Patient.destroy({
        where: {
            id: id
        }
    })
}

module.exports =  {
    createPatient,
    findAllPatient,
    findPatientById,
    updatePatient,
    deletePatient,
};