const { Router } = require('express');
const router = Router();
const candyController = require("../controller/candy-controller");
const categorieController = require("../controller/categories-controller");
const multer = require('multer');
const upload = multer({ dest: 'public/images'})
//Rutas para dulces
router.post('/candy/create', upload.single('image'), candyController.createCandy)
router.put('/candy/update/:id', candyController.updateCandy)
router.get('/candy/getCandy', candyController.getCandy)
router.post('/candy/getCandies', candyController.getCandies)
router.delete('/candy/delete', candyController.deleteCandy)

//Rutas para categorias
router.post('/categorie/create', categorieController.createCategorie)
router.put('/categorie/update/:id', categorieController.updateCategorie)
router.get('/categorie/getCategorie/:id', categorieController.getCategorie)
router.get('/categorie/getCategories', categorieController.getCategories)
router.delete('/categorie/delete/:id', categorieController.deleteCategorie)

module.exports = router;