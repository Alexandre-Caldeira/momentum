const { response } = require('express');
const TaskModel = require('../model/TaskModel');

const current = new Date();

const {startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns'); 

// Classe a ser chamada para cadastrar novas tasks no db
class TaskController{
    
    async create(req,res){
    //sendo async podemos usar await para evitar erros de 
    //sincronia de execução de rotinas em fila pelo db
        const task = new TaskModel(req.body);
        await task 
                .save() //salvar task no db
                .then( response => {
                    //se der certo
                    return res.status(200).json(response);
                }
                ) 
                .catch(error => {
                    //se der algum erro
                    return res.status(500).json(error);
                }
                )

    }

    async update(req,res){
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new:true})
                       .then(response => {
                            return res.status(200).json(response);
                       })
                       .catch(error =>{
                           return res.status(500).json(error);
                       })
    } 

    async all(req,res){
        await TaskModel.find({macaddress: {'$in': req.params.macaddress}})
                       .sort('when')
                       .then(response => {
                           return res.status(200).json(response);
                       })
                       .catch(error => {
                           return res.status(500).json(error); 
                       })
    }

    async show(req,res){
        await TaskModel.findById(req.params.id)
                       .then(response=> {
                           if(response){
                               return res.status(200).json(response);
                           }else{
                               return res.status(404).json({error: 'task not found (oops!)'});
                           }
                       })
                       .catch(error =>{
                           return res.status(500).json(error);
                       });
    }

    async delete(req,res){
        await TaskModel.deleteOne({'_id': req.params.id})
                       .then(response => {
                           return res.status(200).json(response);
                       })
                       .catch(error => {
                           return res.status(500).json(error);
                       });
    }

    async done(req,res){
        await TaskModel.findByIdAndUpdate({'_id': req.params.id},
                                         {'done': req.params.done},
                                         {new: true})
                        .then(response => {
                            if(response)
                                return res.status(200).json(response);
                            else
                                return res.status(404).json({error: 'task not found (oops!)'});
                        })
                       .catch(error => {
                           return res.status(500).json(error);
                       });
    }


    async late(req,res){
        await TaskModel.find({
            'when': {'$lt': current},
            'done':false,
            'macaddress': {'$in': req.params.macaddress}})
                        .sort('when')
                        .then(response => {
                            return res.status(200).json(response);
                        })
                        .catch(error => {
                            return res.status(500).json(error);
                        });
    }

    async today(req,res){
        await TaskModel.find({
            'when': {'$gte': startOfDay(current),'$lte': endOfDay(current)},
            'macaddress': {'$in': req.params.macaddress}})
                        .sort('when')
                        .then(response => {
                            return res.status(200).json(response);
                        })
                        .catch(error => {
                            return res.status(500).json(error);
                        });
    }

    async week(req,res){
        await TaskModel.find({
            'when': {'$gte': startOfWeek(current),'$lte': endOfWeek(current)},
            'macaddress': {'$in': req.params.macaddress}})
                        .sort('when')
                        .then(response => {
                            return res.status(200).json(response);
                        })
                        .catch(error => {
                            return res.status(500).json(error);
                        });
    }

    async month(req,res){
        await TaskModel.find({
            'when': {'$gte': startOfMonth(current),'$lte': endOfMonth(current)},
            'macaddress': {'$in': req.params.macaddress}})
                        .sort('when')
                        .then(response => {
                            return res.status(200).json(response);
                        })
                        .catch(error => {
                            return res.status(500).json(error);
                        });
    }

    async year(req,res){
        await TaskModel.find({
            'when': {'$gte': startOfYear(current),'$lte': endOfYear(current)},
            'macaddress': {'$in': req.params.macaddress}})
                        .sort('when')
                        .then(response => {
                            return res.status(200).json(response);
                        })
                        .catch(error => {
                            return res.status(500).json(error);
                        });
    }
}

// classe devolve a si mesma quando chamada
module.exports = new TaskController();