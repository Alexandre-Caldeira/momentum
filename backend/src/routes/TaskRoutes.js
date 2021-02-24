const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

const TaskValidation = require('../middlewares/TaskValidation');

const MacaddressValidation = require('../middlewares/MacaddressValidation');

// Quando chegarem requisições do tipo post em /task,
// será chamada a função TaskController.create
// router.post('/task',TaskController.create)

// Após injeção usando server.use no index.js, pode 
// ser chamada TaskController.create diretamente no /
router.post('/', TaskValidation, TaskController.create);

router.put('/:id', TaskValidation, TaskController.update);

router.delete('/:id', TaskController.delete);

router.get('/:id',TaskController.show);

router.get('/filter/all/:macaddress', TaskController.all);

router.put('/:id/:done', TaskController.done);

router.get('/filter/late/:macaddress', TaskController.late);

router.get('/filter/today/:macaddress', TaskController.today);

router.get('/filter/week/:macaddress', TaskController.week);

router.get('/filter/month/:macaddress', TaskController.month);

router.get('/filter/year/:macaddress', TaskController.year);



module.exports = router;
