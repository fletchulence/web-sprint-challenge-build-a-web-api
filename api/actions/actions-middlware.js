// add middlewares here related to actions
const Action = require('./actions-model')

module.exports = {
   checkBody,
   idExists,
}

function checkBody (req, res, next) {
   if ( !req.body.name || !req.body.description ){
      next({ status: 400, message: 'cant happen' })
   } else {
      next()
   }
}

async function idExists (req, res, next) {
   const {id} = req.params;
   const dbId = await Action.get(id)
   try{
      if (!dbId){
         next({ status: 404 , message: 'this id is not found in our records' }) // maybe add a message?
      } else{
         req.id = dbId
         next()
      }
   } catch(err){
      next(err)
   }
}