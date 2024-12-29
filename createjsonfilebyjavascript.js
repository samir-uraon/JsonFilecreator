const fs=require("fs")
const data=fs.readFileSync("data.txt","utf-8").split("\r\n")

let recive=[]
let test=[]


function create(a){
     let objkey=["image_link","image_location"]
     let obj={}
    
     
   a.map((value,index,array)=>{
        obj[objkey[index]]=value
   })
     
  return obj
  
}


data.forEach((element,index)=> {
     
     if(element!=""){
          test=[...test,element]     
     }
     else{
          recive=[...recive,create(test)]
          test=[]
     }
});

console.log(recive);
