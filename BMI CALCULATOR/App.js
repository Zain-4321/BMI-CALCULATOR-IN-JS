const Div=document.querySelector(".main")




Div.addEventListener("click",(e)=>{

    e.preventDefault();

    const Height=parseInt((document.querySelector("#height")).value);
    const Weight=parseInt((document.querySelector("#weight")).value);
    const Result=document.querySelector(".result");
    if(Height=== ''  || Height < 0  || isNaN(Height)) {
            Result.innerHTML="Please Give a Valid Height";
        }else if(Weight=== ''  || Weight < 0  || isNaN(Weight)){
            Result.innerHTML="Please Give a Valid Weight";
        }else{
           
            const bmi = (Weight/ ((Height * Height)/10000)).toFixed(2)
            Result.innerHTML =` <span>${bmi}</span>`
      
        }
})