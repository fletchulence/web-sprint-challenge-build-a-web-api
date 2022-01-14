// add middlewares here related to projects
const Project = require('./projects-model')

module.exports = {
   checkBody,
   idExists,
}

// checking for paload to have a req.body -- used for initial check on post/update
function checkBody (req, res, next) {
   try{
      if (!req.body){
         next({ status: 404 })
      } else{
         next()
      }
   } catch(err){
      next(err)
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
         next()
      }
   } catch(err){
      next(err)
   }
};