const catchError = require('../utils/catchError');
const Soung = require('../models/Soung');


//Get All 
const getAll = catchError(async(req, res) => {
    const soung = await Soung.findAll()
    return res.json(soung)
});

//Get One
const getOne = catchError(async(req, res) => {
    const {id} =  req.params;
    const soung = await Soung.findByPk(id)
    if(!soung){
        return res.status(404).json({msg:"Nada para mostrar"})
    }
    return res.json(soung)
    
});

//POST
const create  =  catchError(async(req,res)=>{
    const soung = await Soung.create(req.body)
    return res.status(201).json(soung)   
    
})


const update =  catchError(async(req,res)=>{
    const {id} =  req.params;    
    const soung = await Soung.update(req.body,{where: {id}, returning:true})    

    if(soung[0]===0){       
        return res.sendstatus(404)
    }
    return res.json(soung[1][0])
})

const destroy =  catchError(async(req,res)=>{
    const {id} =  req.params;
    const soung = await Soung.destroy({where: {id}})   
    if(!soung){
        return res.status(404).json({msj:"Nada Para mostrar"})
    }

    return res.status(204).json({msg:"Dato Eliminado  con Exito  "})
    
})



module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
}