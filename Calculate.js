var result=''

function buttonPress(value){
    
   // document.getElementsByName("button")
   // var typedWord=console.log(value)
   

   if(value =='X'){
       value=''
       document.getElementById('screen').value+= '*'
        
   }
   

   result= document.getElementById('screen').value+=value
    
   
}

function Answer(value){
    document.getElementById('screen').value= eval(result)

}
function cancel(value){
    document.getElementById('screen').value=''

}
   
    
    


