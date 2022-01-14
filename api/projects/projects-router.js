// Write your "projects" router here!
const router = require('express').Router();
const Project = require('./projects-model')

const {
   checkBody
} = require('./projects-middleware')

// [GET] all projects
router.get('/', async (req, res, next) =>{
   try{
      res.json(await Project.get())
   } catch(err){
      next(err)
   }
});

// [GET] by id -- need midd for if id DNE
router.get('/:id', async (req, res, next) =>{
   const {id} = req.params
   try{
      res.json(await Project.get(id))
   } catch(err){
      next(err)
   }
});

// [POST] 
router.post('/', (req, res, next)=>{
   
})

module.exports = router;