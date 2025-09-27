const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.post('/', newsController.createNews);        // Create
router.get('/', newsController.getAllNews);         //  Get All
router.get('/:id', newsController.getNewsById);     //  Get One
router.put('/:id', newsController.updateNews);      //  Update
router.delete('/:id', newsController.deleteNews);   //  Delete

module.exports = router;
