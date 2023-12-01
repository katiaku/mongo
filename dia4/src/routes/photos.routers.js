const { Router } = require('express');
const router = Router();
const { getAllPhotos, addPhoto, updatePhoto, deletePhoto, deleteAllPhotos } = require('../controller/photos.controller');

router.get('/photos', getAllPhotos);

router.post('/photos', addPhoto);

router.put('/photos', updatePhoto);

router.delete('/photo', deletePhoto);

router.delete('/photos', deleteAllPhotos);

module.exports = router;
