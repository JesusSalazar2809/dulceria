const candyModel = require ("../models/candy");


exports.createCandy = async (req, res) => {
    try {
        await candyModel.create(req.body).catch(err =>{
            console.log(err.message)
            return res.status(400).json({error: "Algo salio mal al intentar crear el dulce"});
        })
        return res.status(200).json({success:"Dulce creado correctamente"});
    } catch (error) {
        console.log(error.message)
	    return res.status(400).json({error: "Algo salio mal al intentar crear el dulce"});
    }
}

exports.getCandy = async (req, res) => {
    try {
        if(!req.params.id || !ObjectId.isValid(req.params.id)){
            return res.status(400).json({error:"ID invalido o inexistente"})
        }
        const dulce = await candyModel.findOne({_id:req.params.id}).populate({
            path: 'categorie',
            select:'name_cat'
        });
        return res.status(200).json(dulce);
    } catch (error) {
        console.log(error.message)
	    return res.status(400).json({error: "Algo salio mal al intentar obtener el dulce"});
    }
}

exports.getCandies = async (req, res) => {
    try {
        const dulces = await candyModel.find().populate({
            path: 'categorie',
            select:'name_cat'
        });
        return res.status(200).json(dulces);
    } catch (error) {
        console.log(error.message)
	    return res.status(400).json({error: "Algo salio mal al intentar obtener los dulces"});
    }
}

exports.updateCandy = async (req, res) => {
    try {
        if(!req.params.id || !ObjectId.isValid(req.params.id)){
            return res.status(400).json({error:"ID invalido o inexistente"})
        }
        await candyModel.findByIdAndUpdate({_id:req.params.id},{
            $set:req.body
        }).catch(err =>{
            console.log(err.message)
            return res.status(400).json({error: "Algo salio mal al intentar editar el dulce"});
        });
        return res.status(200).json({success:"Dulce editado correctamente"});
    } catch (error) {
        console.log(error.message)
	    return res.status(400).json({error: "Algo salio mal al intentar editar el dulce"});
    }
}

exports.deleteCandy = async (req, res) => {
    try {
        if(!req.params.id || !ObjectId.isValid(req.params.id)){
            return res.status(400).json({error:"ID invalido o inexistente"})
        }
        await candyModel.findOneAndRemove({_id:req.params.id}).catch(err =>{
            console.log(err.message)
            return res.status(400).json({error: "Algo salio mal al intentar eliminar el dulce"});
        });
        return res.status(200).json({success:"Dulce eliminado correctamente"});
    } catch (error) {
        console.log(error.message)
	    return res.status(400).json({error: "Algo salio mal al intentar eliminar el dulce"});
    }
}