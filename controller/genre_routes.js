const express = require('express')
const router = express.Router()

// INDEX 
router.get('/', (req,res)=>{
    console.log('Page working')
    res.render('bands/index')
})

module.exports = router