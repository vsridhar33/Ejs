const router=require('express').Router();
const{login1,login,Registration1,Registration,Homepage1,Homepage,ProductListing1, ProductListing,ProductDetailsPage1,ProductDetailsPage,CartPage1,CartPage}=require('./controller');



router.post('/login',login1)
router.get('/login',login)
router.post('/registration',Registration1)
router.get('/registration',Registration)
router.post('/homepage',Homepage1)
router.get('/homepage',Homepage)
router.post('/ProductListingPage',ProductListing1)
router.get('/ProductListingPage', ProductListing)
router.post('/ProductDetailsPage',ProductDetailsPage1)
router.get('/ProductDetailsPage',ProductDetailsPage)
router.post('/CartPage',CartPage1)
router.get('/CartPage',CartPage)
module.exports=router;
