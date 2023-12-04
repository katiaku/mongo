const { Router } = require('express');
const router = Router();
const { getProfessionals, addProfessional, updateProfessional, deleteProfessional } = require('../controller/profesional.controller');

router.get('/profesionales', getProfessionals);

router.post('/profesionales', addProfessional);

router.put('/profesionales', updateProfessional);

router.delete('/profesionales', deleteProfessional);

module.exports = router;
