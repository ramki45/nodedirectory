const fs = require('fs');
fs.readdir(process.argv[2],{withFileTypes: true},function(err,data){
  if(err) throw err;
  data.map((ele)=>{
    if(ele.isFile()){
      console.log(`${ele.name} - File`)
    }
    else{
      console.log(`${ele.name} - Folder`)
    }
  })
})  