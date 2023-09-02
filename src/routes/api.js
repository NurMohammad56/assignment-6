const express = require('express');
const router = express.Router();

// ------File import------
const blogController=require('../controllers/blogController');
const blogDetailsController=require('../controllers/blogDetailsController');
const commentController=require('../controllers/commentController');
const messageController=require('../controllers/messageController');
const portfolioController=require('../controllers/portfolioController');
const productController=require('../controllers/productControlle');
const profitController=require('../controllers/profitController');
const projectController=require('../controllers/projectController');
const serviceController=require('../controllers/serviceController');
const titleController=require('../controllers/titleController');


// -------Get req-------
// -------blog-------
router.get('/one', blogController.create);
router.get('/two', blogController.read);
router.get('/three', blogController.delete);
router.get('/four', blogController.update);

// -------blog details-------
router.get('/five', blogDetailsController.create);
router.get('/six', blogDetailsController.read);
router.get('/seven', blogDetailsController.delete);
router.get('/eight', blogDetailsController.update);

// -------comment-------
router.get('/nine', commentController.create);
router.get('/ten', commentController.read);
router.get('/eleven', commentController.delete);
router.get('/twelve', commentController.update);

// -------message-------
router.get('/thirteen', messageController.create);
router.get('/fourteen', messageController.read);
router.get('/fifteen', messageController.delete);
router.get('/sixteen', messageController.update);

// -------portfolio-------
router.get('/seventeen', portfolioController.create);
router.get('/eighteen', portfolioController.read);
router.get('/nineteen', portfolioController.delete);
router.get('/twenty', portfolioController.update);

// -------product-------
router.get('/twenty_one', productController.create);
router.get('/twenty-two', productController.read);
router.get('/twenty-three', productController.delete);
router.get('/twenty-four', productController.update);

// -------profit-------
router.get('/twenty_five', profitController.create);
router.get('/twenty_six', profitController.read);
router.get('/twenty_seven', profitController.delete);
router.get('/twenty_eight', profitController.update);

// -------project-------
router.get('/twenty_nine', projectController.create);
router.get('/thirty', projectController.read);
router.get('/thirty-one', projectController.delete);
router.get('/thirty-two', projectController.update);


// ------SERVICE------
router.get('/thirty-three', serviceController.create);
router.get('/thirty-four', serviceController.read);
router.get('/thirty-five', serviceController.delete);
router.get('/thirty-six', serviceController.update);

// -------title-------
router.get('/thirty-seven', titleController.create);
router.get('/thirty-eight', titleController.read);
router.get('/thirty-nine', titleController.delete);
router.get('/forty', titleController.update);



module.exports=router;