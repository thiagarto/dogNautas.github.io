const { Raza, Temperamento } = require('../../../db')
const axios=require('axios')
const {
    YOUR_API_KEY
  } = process.env;

const getDbDogs= async () =>{
try {
    const allInDb = await Raza.findAll({
        include: [Temperamento]
    })

    const allDbDogs=await allInDb.map(dogs=>{
        const allDogs = dogs.types?.map(type=> type.name);
        return {
            name:dogs.name,
            height:dogs.height, 
            weight:dogs.weight, 
            years:dogs.life_span,
            image:dogs.image
        }
    })
    return allDbDogs

} catch (error) {
    console.log(error)
}
}

const getApiDogs = async()=>{
    let dogsApi= await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)


  try {
    const allDogsApi= await dogsApi.data.results?.map(dogs=>{
        return{
            id:dogs.id,
            name:dogs.name,
            height:dogs.height, 
            weight:dogs.weight, 
            years:dogs.life_span,
            image:dogs.image
        }

    })

    return allDogsApi
  } catch (error) {
    console.log(error)
  }}


const getAllDogs= async ()=>{
    const apiDogs= await getApiDogs();
    const dbDogs= await getDbDogs();
    const allDogs=dbDogs.concat(apiDogs)
    return allDogs
}


module.exports ={
    getDbDogs,
    getApiDogs,
    getAllDogs
}