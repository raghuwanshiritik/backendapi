const express =require('express')
const BlogController = require('../controllers/BlogController')
const UserController = require('../controllers/UserController')
const router =express.Router()

//blog controller
router.post('/create',BlogController.create)
router.get('/display',BlogController.display)
router.get('/view/:id',BlogController.view)
router.post('/update/:id',BlogController.update)
router.delete('/delete/:id',BlogController.delete)

//UserController
router.post('/userinsert',UserController.userinsert)
router.post('verify_login', UserController.verify_login)
router.get('/me',UserController.getuserdetail)
router.get('/getalluser',UserController.getalluser)
router.post('/updatepassword',UserController.change_password)
router.post('/updateprofile',UserController.profile_update)
router.get('/',UserController.logout)



module.exports=router