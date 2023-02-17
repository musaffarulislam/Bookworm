const { response } = require('express');
const express = require('express');
const userController = require('../conteollers/userController');
const midleware = require('../midlewares/middleware') 
const upload = require('../midlewares/multer')
const router = express.Router();


router.get('/',userController.renderHome);

router.post('/login',userController.loginVarification);

router.get('/signup',midleware.signupSession,userController.renderSignup);

router.post('/register',midleware.signupSession,userController.userSignup);

router.get('/otp',midleware.signupSession,userController.renderOTP);

router.post('/verifyOTP',midleware.signupSession,userController.verifyOTP);

router.post('/resendOTP',midleware.signupSession,userController.resendOTP);

router.get('/myProfile/:id',midleware.userSession,userController.renderMyProfile);

router.get('/myOrder/:id',midleware.userSession,userController.renderMyOrder);

router.post('/orderDelete',midleware.userSession,userController.orderDelete);

router.post('/editUser/:id',midleware.userSession,userController.editUser);

router.post('/address/:id',midleware.userSession,userController.address);

router.post('/addUserImage/:id',midleware.userSession,upload.single('userImage'),userController.addUserImage);

router.get('/book',userController.renderBook);

router.get('/book-details/:id',userController.bookDetails);

router.get('/cart/:id',midleware.userSession,userController.renderCart);

router.post('/addToCart',midleware.userSession,userController.addToCart);

router.put('/productDec',midleware.userSession,userController.productDec);

router.put('/productInc',midleware.userSession,userController.productInc);

router.put('/productRemove',midleware.userSession,userController.productRemove);

router.post('/applyCoupon',midleware.userSession,userController.applyCoupon);

router.get('/checkout',midleware.userSession,userController.renderCheckout);

router.put('/cashOnDelivary',midleware.userSession,userController.cashOnDelivary);

router.put('/onlinePayment',midleware.userSession,userController.onlinePayment);

router.put('/verifyOnlinePayment',midleware.userSession,userController.verifyOnlinePayment);

router.get('/logout',userController.logout);


module.exports=router;