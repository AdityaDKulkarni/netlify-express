function chooseColor(){
      var mycolor = document.getElementById("myColor").value;
      document.execCommand('foreColor', false, mycolor);
    }

    function changeFont(){
      var myFont = document.getElementById("input-font").value;
      document.execCommand('fontName', false, myFont);
    }

    function changeSize(){
      var mysize = document.getElementById("fontSize").value;
      document.execCommand('fontSize', false, mysize);
    }

    function checkDiv(){
      var editorText = document.getElementById("editor1").innerHTML;
      if(editorText === ''){
        document.getElementById("editor1").style.border = '5px solid red';
      }
    }

    function removeBorder(){
      document.getElementById("editor1").style.border = '1px solid transparent';
    }

function dis(val) 
{ 
   document.getElementById("result").value+=val 
} 
 
//function that evaluates the digit and return result 
function solve() 
{ 
   let x = document.getElementById("result").value 
   let y = eval(x) 
   document.getElementById("result").value = y 
} 
 
//function that clear the display 
function clr() 
{ 
   document.getElementById("result").value = "" 
}
