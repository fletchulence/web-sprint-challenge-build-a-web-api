// Write your "projects" router here!
const router = require('express').Router();
const Project = require('./projects-model')

const {
   checkBody,
   idExists,
   checkComplete,
} = require('./projects-middleware')

// [GET] all projects
router.get('/', async (req, res, next) => {
   try {
      res.json(await Project.get())
   } catch (err) {
      next(err)
   }
});

// [GET] by id -- need midd for if id DNE
router.get('/:id', idExists, async (req, res, next) => {
   // const {id} = req.params
   try {
      res.json(await Project.get(req.id))
   } catch (err) {
      next(err)
   }
});

// [POST] 
router.post('/', checkBody, async (req, res, next) => {
   const newProject = await Project.insert(req.body)
   try {
      res.json(newProject)
   } catch (err) {
      next(err)
   }
});

// [PUT] updating the post based on the id
router.put('/:id', idExists, checkBody, checkComplete, async (req, res, next) => {
   // const {id}
   let changes = { ...req.body, completed: req.completed };
   const updateProject = await Project.update(req.id, changes)
   try {
      res.json(updateProject)
   } catch (err) {
      next(err)
   }
});

//! this test is not correct... if we are going by README
router.delete('/:id', idExists, async (req, res, next)=>{
   try{
      res.json (await Project.remove( req.id ))
   } catch(err){
      next(err)
   }
});

// [GET] returns actions per project id
router.get('/:id/actions', idExists, async (req, res, next)=>{
   try {
      res.json( await Project.getProjectActions( req.id ))
   } catch(err){
      next(err)
   }
})

module.exports = router;