const { Router } = require('express');

const router = Router();


const adnCtrl = require('../controllers/adn.controller')

//Declaraciones de rutas
router.get('/api/mutations', adnCtrl.getMutation);
router.get('/api/stats', adnCtrl.stats);
router.post('/api/mutation', adnCtrl.mutation); 
router.get('/api/list', adnCtrl.list);


module.exports = router;