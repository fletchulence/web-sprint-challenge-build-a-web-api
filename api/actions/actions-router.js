// Write your "actions" router here!
const router = require('express').Router();
// const Action = require('./actions-model');
const Action = require('./actions-model')

const {
   checkBody,
   idExists
} = require('./actions-middlware')

router.get('/', async (req, res, next)=>{
   try{
      res.json(await Action.get())
   } catch(err){
      next(err)
   }
})

router.get('/:id', idExists, async (req, res, next)=>{
   try{
      res.json( req.id )
   } catch(err){
      next(err)
   }
})

module.exports = router;