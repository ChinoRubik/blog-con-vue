'use strict'
var validator = require('validator');
var Article = require('../models/article');
var fs = require('fs');
var path = require('path');


var controller = {

    probando: (req, res) => {
        var edad = req.body.edad; //AQUI ESTOY SEÑALANDO UN DATO DESDE MIS POSTMAM, EL DATO SE LO ESTOY PASANDO EN MI PESTAÑA BODY
        return res.status(200).send(
            {
                nombre: 'Hernandez Ordoñez Cristian Ramon',
                puesto: 'Desarrollador web',
                universidad: 'UAEM',
                edad
            }
        ) //AQUI PUEDO RETORNAR COMO UN HTML CON ` ` O TAMBIEN UN JSON
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion de test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        //RECOGER PARAMETROS POR POST
        var params = req.body;
        console.log(params);

        //VALIDAR DATOS(VALIDATOR)
        try {
            var validator_title = !validator.isEmpty(params.title);
            var validator_content = !validator.isEmpty(params.content);


        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: "Los datos estan incompletos"
            });
        }

        if (validator_title && validator_content) {
            //CREAR EL OBJETO A GUARDAR
            var articulo = new Article();

            //ASIGNAR VALORES
            articulo.title = params.title;
            articulo.content = params.content;
            //LA FECHA SE GUARDA POR SI SOLA
            articulo.image = null;

            //GUARDAR EL ARTICULO

            articulo.save((err, articleSaved) => {
                if (err || !articleSaved) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'NO SE PUDO GUARDAR EN LA BASE DE DATOS'
                    })
                }

                //DEVOLVER UNA RESPUESTA
                return res.status(200).send({
                    status: 'SUCCESS',
                    article: articleSaved
                })
            });

        } else {
            return res.status(500).send({
                status: 'error',
                message: 'Los datos no son validos'
            })
        }
    },

    getArticles: (req, res) => {
        var query = Article.find({});
        var last = req.params.last;
        if (last != undefined) {
            query.limit(5);
        }
        query.find({}).sort('-_id').exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                })
            }
            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existen datos'
                })
            }

            return res.status(200).send({
                status: 'Success',
                articles
            })
        });
    },

    getArticle: (req, res) => {

        var id_article = req.params.id;
        Article.findById(id_article, (err, article) => {

            if (err) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Error al tratar de obtener a mi articulo'
                });
            }

            if (!article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe mi articulo'
                });
            }

            return res.status(200).send({
                status: 'success',
                article
            });
        });

    },

    update: (req, res) => {

        //Cargamos la id que viene por parametro
        var id_article = req.params.id;
        var data = req.body;

        try {
            var title_validator = !validator.isEmpty(data.title);
            var content_validator = !validator.isEmpty(data.content);
        } catch (err) {
            return res.status(500).send({
                message: err
            })
        }

        if (title_validator && content_validator) {

            Article.findByIdAndUpdate(id_article, data, { new: true }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }

                return res.status(200).send({
                    status: 'Success',
                    articleUpdated
                });
            });


        } else {
            return res.status(500).send({
                status: 'error',
                message: 'Los datos no estan validados correctamente'
            });
        }
    },

    delete: (req, res) => {

        var id_article = req.params.id;
        
        Article.findByIdAndRemove(id_article, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Hubo un error al tratar de eliminar'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo con esa ID'
                });
            }
            var file_path = "upload\\articles\\"+articleRemoved.image;
            fs.unlink(file_path, err =>{
                console.log('eliminado');
            })


            return res.status(200).send({
                status: 'Success',
                articleRemoved
            });


        });

    },

    upload: (req, res) => {
        //CONFIGURAR EL MODULO CONNECT MULTIPARTY ROUTER/ARTICLE.JS (HECHO)


        //RECOGER EL FICHERO DE LA PETICION

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe ningun archivo'

            });
        }

        //CONSEGUIR NOMBRE Y LA EXTENSION DEL ARCHIVO

        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2]
        var file_extension = file_path.split('.')[1];

        console.log(file_path);
        //COMPROBAR LA EXTENSION DE LAS IMAGENES, SI ES VALIDA BORRAR EL FICHERO

        if (file_extension != 'jpg' && file_extension != 'png' && file_extension != 'jpeg' && file_extension != 'gif') {
            //BORRAMOS EL ARCHIVO SUBIDO
            fs.unlink(file_path, (err) => {
                return res.status(500).send({
                    status: 'error',
                    message: 'La extension no es valida'
                });

            });

        } else {
            //SI TODO ES VALIDO
            var id = req.params.id;

            //BUSCAR EL ARTICULO, ASIGNARLE EL NOMBRE DE LA IMAGEN Y ACTUALIZARLO

            Article.findOneAndUpdate({_id: id }, { image: file_name }, { new: true }, (err, updated) => {

                if (err || !updated) {
                    return res.status(500).send({
                        status: 'error',
                        message: err
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    updated
                });

            });

        }
    },

    getImage:(req,res)=>{

        var name = req.params.name;
        var path_file = './upload/articles/'+name;

        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));

            }else{
                return res.status(404).send({
                    status: 'error',
                    message : 'No existe esa imagen'
                });
            }
        })

        
    },
    
    search: (req,res)=>{
        var searchString = req.params.searchString;
        Article.find({
            "$or":[
                {"title":{"$regex":searchString, "$options":"i"}},
                {"content":{"$regex":searchString, "$options":"i"}}
            ]
        })
        .sort([['date','descending']])
        .exec((err,articles)=>{

            if(err && !articles){
                return res.status(500).send({
                    status: 'error',
                    message : err
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        })

    }


}
module.exports = controller;