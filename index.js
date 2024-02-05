let buttonOne=document.getElementById("button1");
  function  myButton1() {
        buttonOne.innerHTML =`Season 1<br />season 2 <br/> season 3 <br/>`;
    }
    buttonOne.addEventListener("click",myButton1);

    let buttonTwo=document.getElementById("button2");
    function  myButton2() {
        buttonTwo.innerHTML ="sn1 16<br />sn2 20 <br/> sn3 10<br/>";
    }
    buttonTwo.addEventListener("click",myButton2);

    let buttonThree=document.getElementById("button3");
    function  myButton3() {
        buttonThree.innerHTML ="English<br/>Spanish<br/> German<br/>latino<br/>chinese";
    }
    buttonThree.addEventListener("click",myButton3);

    function subscribeSubmit(event) {
        event.preventDefault();
        let input = document.querySelector("#email");
        let value=(input.value);
        alert(`Thank you ${value} for subscibing to our services`);
      }
      let form = document.querySelector("#form1");
      form.addEventListener("submit", subscribeSubmit);
      


      let buttonStartinfo=document.getElementById("buttonStart1")
function buttonStart(){
 buttonStartinfo.innerHTML=`Playing<span class="material-symbols-outlined">
    stop_circle
    </span>` 
} 
    buttonStartinfo.addEventListener("click",buttonStart);

    let buttonStartinfo2=document.getElementById("buttonStart2")
function buttonStarttwo(){
 buttonStartinfo2.innerHTML=`Playing<span class="material-symbols-outlined">
    stop_circle
    </span>` 
}  
    buttonStartinfo2.addEventListener("click",buttonStarttwo);
    
    let buttonStartinfo3=document.getElementById("buttonStart3")
    function buttonStartthree(){
        buttonStartinfo3.innerHTML=`Playing<span class="material-symbols-outlined">
            stop_circle
            </span>`  
       }  
           buttonStartinfo3.addEventListener("click",buttonStartthree);
           
           let buttonEndinfo1=document.getElementById("buttonEnd1")
           function buttonEndone(){
               buttonEndinfo1.innerHTML=`Downloading<span class="material-symbols-outlined">
                downloading
                </span>`  
              }  
                  buttonEndinfo1.addEventListener("click",buttonEndone);
                  
                  let buttonEndinfo2=document.getElementById("buttonEnd2")
                  function buttonEndtwo(){
                      buttonEndinfo2.innerHTML=`Downloading<span class="material-symbols-outlined">
                        downloading
                        </span>` 
                     }  
                         buttonEndinfo2.addEventListener("click",buttonEndtwo);
                         
                         let buttonEndinfo3=document.getElementById("buttonEnd3")
                         function buttonEndthree(){
                             buttonEndinfo3.innerHTML=`Downloading<span class="material-symbols-outlined">
                                downloading
                                </span>` 
                            }  
                                buttonEndinfo3.addEventListener("click",buttonEndthree);