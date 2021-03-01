const TaskModel = require('../model/TaskModel');

const { isPast} = require('date-fns');

const TaskValidation = async (req,res,next) => {
    const {macaddress, type, title, description, when} = req.body;

    //Valida tamanho e existencia de macaddress
    if(macaddress.length != 17){
    
        return res.status(400).json({ error: ' Missing macaddress (é obrigatório!) '});
    
    }else if (!type){ 

        return res.status(400).json({ error: ' Missing type (é obrigatório!) '});
    
    }else if (!title){

        return res.status(400).json({ error: ' Missing title (é obrigatório!) '});
    
    }else if (!description){

        return res.status(400).json({ error: ' Missing description (é obrigatório!) '});
    
    }else if (!when){

        return res.status(400).json({ error: ' Missing when (data é obrigatória!) '});

    }else{
        let exists;

        if (req.params.id){
            exists = await TaskModel
                            .findOne({ 
                                '_id': {'$ne': req.params.id},
                                'when': {'$eq': new Date(when)},
                                'macaddress': {'$in': macaddress} 
                            })
                            .catch(error => {
                                    //se der algum erro
                                    return res.status(400).json(error);
                            });

            if(exists){
                return res.status(400).json({ error: 'Task collision (horário cheio!)'});
            }
        }else{
            if (isPast(new Date(when))){

                return res.status(400).json({ error: ' Past date (data é falsa!) '});
        
            }
            exists = await TaskModel
                                .findOne({ 
                                    'when': {'$eq': new Date(when)},
                                    'macaddress': {'$in': macaddress} 
                                })
                                .catch(error => {
                                        //se der algum erro
                                        return res.status(400).json(error);
                                });

            if(exists){
                return res.status(400).json({ error: 'Task collision (horário cheio!)'});
            }
        }

        next();
    }
}

module.exports = TaskValidation;