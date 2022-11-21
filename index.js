const { json } = require('body-parser');
const e = require('express');
const { Router } = require('express');
const { Raza, Temperamento } = require('../db');
const { getDbDogs,
    getApiDogs,
    getAllDogs} = require('./models/controller/funcionesDbApi');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/dogs', async function(req,res){
   try 
    {const { name, height, weight, years, sexo }=req.body;

    await Raza.create({name, height, weight, years, sexo});
   return res.status(201).send('Creado con éxito')}
    catch(error){
        return res.status(400).send({error:error.message})
    }
})


router.get('/dogs',async function(req,res){
    const { name } = req.query;
    const allDogs=await getAllDogs(); 
    try{ 
        name ? res.status(200).json(allDogs.map(dog => dog.name===name)): res.status(200).json(allDogs)
   }
   catch(error){
       return res.status(404).send('Error en la API')
    }
   } )



router.get(`/{idRaza}`)
router.get('/temperaments')
router.delete('/')
module.exports = router;
