var express = require('express');
var router = express.Router();
var Task=require('../models/task');

// We create 4 routes. Each of them is an http method either GET, PUT, DELETE, POST
 
router.get('/:id?',function(req,res,next){
 
  if(req.params.id){ // If the id is passed as parameter we call the getTaskById method otherwise we call the gerEveryTask method
  
    Task.getTaskById(req.params.id,function(err,rows){
    
      if(err){

        res.json(err);

      }
      else{

        res.json(rows);
        
      }
    });
  }
  else{
  
    Task.getEveryTask(function(err,rows){
  
      if(err){
        res.json(err);
      }
      else{

        res.json(rows);
      }
    
    });
  }

});

router.post('/:description',function(req,res,next){
 
  Task.createTask(req.params,function(err,count){

    if(err){
      
      res.json(err);

    }
    else{
      
      res.json(req.body);

    }

  });

});

router.delete('/:id',function(req,res,next){
 
  Task.deleteTask(req.params.id,function(err,count){
  
    if(err){

      res.json(err);

    }
    else{

      res.json(count);

    }
  
  });

});

router.put('/:id/:description/:completed',function(req,res,next){
 
  Task.modifyTask(req.params,function(err,rows){
  
    if(err){

      res.json(err);

    }
    else{

      res.json(rows);

    }

  });

 });

 module.exports=router;