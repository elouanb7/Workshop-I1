const Rdv = require("../models/rdv");
const Patient = require("../models/patient");

const createRdv = async (rdvBody) => {
    return Rdv.create( {
        date_debut: rdvBody.date_debut,
        date_fin: rdvBody.date_fin,
        nb_place: rdvBody.nb_place,
    })
}

const findRdvById = async (id) => {
    return Rdv.findOne({
        where: {
            id: id
        },
        include: [{
            model: Patient,
        }]
    })
}

const findAllRdv = async () => {
    return Rdv.findAll({
        include: [{
            model: Patient,
        }]
    })
}

const updateRdv = async (id, updateRdvBody) => {
    return Rdv.update(updateRdvBody, {
        where: {
            id: id
        }
    });
};

const deleteRdv = async (id) => {
    return Rdv.destroy({
        where: {
            id: id
        }
    })
}

module.exports =  {
    createRdv,
    findAllRdv,
    findRdvById,
    updateRdv,
    deleteRdv,
};