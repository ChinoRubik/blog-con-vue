'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');
var connect_multi = require('connect-multiparty');
var middleware_upload = connect_multi({uploadDir: './upload/articles'});


var router = express.Router();

//RUTAS DE PRUEBA
router.get('/probando',ArticleController.probando);
router.post('/test', ArticleController.test);


//RUTAS DE ARTICULO
router.post('/save',ArticleController.save);
router.get('/getArticles/:last?', ArticleController.getArticles);
router.get('/getArticle/:id',ArticleController.getArticle);
router.put('/update/:id',ArticleController.update);
router.delete('/delete/:id',ArticleController.delete);
router.post('/uploadImage/:id',middleware_upload,ArticleController.upload);
router.get('/getImage/:name',ArticleController.getImage);
router.get('/search/:searchString', ArticleController.search);

module.exports = router;