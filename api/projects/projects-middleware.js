// add middlewares here related to projects
const Project = require('./projects-model')

module.exports = {
   checkBody,
   // idExists,
}

function checkBody(req, res, next){
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

// async function(req, res, next){
//    const {id} = req.params;
//    const dbId = await Project.get(id)
//    try{
//       if (!dbId){
//          next()
//       }
//    } catch(err){
//       next(err)
//    }
// }