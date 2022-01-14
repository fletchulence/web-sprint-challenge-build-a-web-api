// Write your "actions" router here!
const router = require('express').Router()
const Action = require('./actions-model')

router.get('/', async (req, res, next)=>{
   try{
      res.json(await Action.get())
   } catch(err){
      next(err)
   }
})

module.exports = router;