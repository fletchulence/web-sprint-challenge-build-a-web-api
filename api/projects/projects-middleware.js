// add middlewares here related to projects
const Project = require('./projects-model')

module.exports = {
   checkBody,
   idExists,
   checkComplete
}

// checking for paload to have a req.body -- used for initial check on post/update
function checkBody (req, res, next) {
   if ( !req.body.name || !req.body.description ){
      next({ status: 400, message: 'cant happen' })
   } else {
      next()
   }
}

function checkComplete (req, res, next){
   // const {id} = req.params
   // const completed = Project.get( id ) 
   if ( req.body.completed === undefined ){
      next({ status: 400, message: 'please reply "YES" to completed field'})
   } else {
      req.completed = req.body.completed
      next()

      // next()
   }
}

// checking for id to exist in the db
async function idExists (req, res, next) {
   const {id} = req.params;
   const dbId = await Project.get(id)
   try{
      if (!dbId){
         next({ status: 404 , message: 'this id is not found in our records' }) // maybe add a message?
      } else{
         req.id = id
         next()
      }
   } catch(err){
      next(err)
   }
}