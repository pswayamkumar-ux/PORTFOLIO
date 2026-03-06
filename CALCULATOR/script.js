const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

const lastResult = document.getElementById("lastResult");

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const val = btn.getAttribute("data-value");
        console.log(val)
        if(val === "C"){
            clearDisplay();
        }else if(val == "="){
            calcualte();
        }else{
            appendValue(val)
        }
    })

    
})

function clearDisplay(){
    display.value = ""
}

function appendValue(val){
    display.value += val
}

function calcualte(){
    try {
        let result = eval(display.value);
        display.value = result
        lastResult.value = result
    } catch (error) {
        display.value = "Error : Invalid Result"
    }
}


