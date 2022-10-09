let startBtn=document.querySelector(".start"),
   pauseBtn=document.querySelector(".pause"),
   resetBtn=document.querySelector(".reset"),
   hour=document.querySelector(".hour"),
   minute=document.querySelector(".minutes"),
   second=document.querySelector(".second"),
   femtosecond=document.querySelector(".femtosecond"),
   time=document.querySelector(".time")
   let countFemto

   // set zero in left in one number
   function setZero (v){
      return (+v<10) ? `0${v}` : v
   }


// start function
startBtn.onclick=function(e){
   pauseBtn.classList.remove("paus")
   
   if(!startBtn.classList.contains("work")){
      startBtn.classList.add("work")
      countFemto=setInterval(_=>{
      
         if(startBtn.classList.contains("work")){
            femtosecond.innerHTML = setZero(parseInt(+femtosecond.innerHTML) + 1)
            
            if(+femtosecond.innerHTML==99){
               femtosecond.innerHTML=0
               second.innerHTML = setZero(parseInt(+second.innerHTML) + 1)
               
               if(+second.innerHTML==59){
                  second.innerHTML = setZero(0)
                  minute.innerHTML = setZero(parseInt(+minute.innerHTML) + 1)
                  
                  if(+minute.innerHTML==59){
                     minute.innerHTML = setZero(0)
                     hour.innerHTML = setZero(parseInt(+hour.innerHTML) + 1)
                     
                     if(+hour.innerHTML==24){
                        hour.innerHTML = setZero(0)
   
                     }
                  }
               }
      
            }
            
            // clear interval if contains puas
            if(pauseBtn.classList.contains("paus")) clearInterval(countFemto)
   
            
      
         }
         
      } ,10)
   }else{
      return false
   }

   
   
   
}

// pause
pauseBtn.onclick=function(){
   startBtn.classList.toggle("work")
   pauseBtn.classList.toggle("paus")
   if(startBtn.classList.contains("work")){
      startBtn.classList.remove("work")
   }
} 



// reset btn
resetBtn.onclick=function(){  
   clearInterval(countFemto)
   hour.innerHTML = setZero(0)
   minute.innerHTML = setZero(0)
   second.innerHTML = setZero(0)
   femtosecond.innerHTML = setZero(0)
}