input=document.querySelector('input')
btns=document.querySelectorAll('.button')

for(item of btns){
    item.addEventListener('click',(e)=>{
      txt=e.target.innerText
      if(txt == '÷'){
        txt='/'
      }

      if(txt == '×'){
        txt='*'
      }

      if(txt=='e'){
        txt='2.71828'
      }

      if(txt=='π'){
        txt='3.142'
      }

     input.value+=txt
    })
}

function equal(){
    
        result=eval(input.value)
       input.value=result

}

function del(){
    input.value=input.value.substring(0,input.value.length-1)
        
}

function allClear(){
    input.value=''
}

function sqrt(){
    input.value=Math.sqrt(input.value)
}

function cbrt(){
  input.value=Math.cbrt(input.value)
}

function square(){
  input.value=Math.pow(input.value,2)
}

function facto(){
  result=1
  for(let i=1;i<=input.value;i++){
      result=result*i
  }

  input.value=result
}

function sin(){
  input.value=Math.sin(input.value)
}

function cos(){
  input.value=Math.cos(input.value)
}

function tan(){
  input.value=Math.tan(input.value)
}

function log(){
  input.value=Math.log(input.value)
}




