// Write your "projects" router here!
const router = require('express').Router();
const Project = require('./projects-model')


router.get('/', async (req, res, next) =>{
   try{
      res.json(await Project.get())
   } catch(err){
      next(err)
   }
});




module.exports = router;