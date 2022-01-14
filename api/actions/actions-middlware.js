// add middlewares here related to actions

module.exports = {
   checkBody
}

function checkBody (req, res, next) {
   if ( !req.body.name || !req.body.description ){
      next({ status: 400, message: 'cant happen' })
   } else {
      next()
   }
}