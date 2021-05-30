class Calculator {
    constructor(input,output){
        this.inputDisplay = input
        this.outputDisplay = output
        this.inputhistory = []
    }

    clearButton(){
        this.inputhistory = []
    }

    backButton(){}

    percent(){}

    insertnumber(){
        if (this.GetLastInputType() === "number"){
            this.appentToLastInput(value)
        }else if(this.GetLastInputType() === "operator" || this.GetLastInputType() === null){
            this.addNewInput(value,"number")
        }
    }

    negotion(){}

    operation(){}
    
    decimal(){}

    equal(){}

    //helping functions
    GetLastInputType(){
        return (this.inputhistory.length === 0) ? null : this.inputhistory[this.inputhistory.length -1].type
    }
    
    GetLastInputValue(){
        return (this.inputhistory.length === 0) ? null : this.inputhistory[this.inputhistory.length -1].value
    }

    getinputValues(){
        return this.inputDisplay.map[entry => entry.value]
    }

    getoutputValue(){
        return this.outputDisplay.value.replace(/,/g,"")
    }

    addNewInput(){
        this.inputhistory.push({"type" : type , "value" : value.toString() })
    }

    updateInput(){
        this.inputDisplay.value  = this.getinputValues.join(" ")
    }

    updateOutput(value){
        this.outputDisplay.value = Number(value).toLocaleString()
    }
    

}

const inputDisplay = document.querySelector('#history')
const outputDisplay = document.querySelector("#result")
const allClearButton = document.querySelector("[data-all-clear]")
const backSpaceButton = document.querySelector("[data-backspace]")
const percentBUtton = document.querySelector("[data-percent]")
const operatorButton = document.querySelector("[data-operator]")
const numberButton = document.querySelector("[data-number]")
const negotionButton = document.querySelector("[data-negotion]")
const decimalButton = document.querySelector("[data-decimal]")
const equalButton = document.querySelector("[data-equal]")

const calculator = new Calculator(inputDisplay,outputDisplay)

allClearButton.addEventListener("click" , ()=> {
    calculator.clearButton()
})

backSpaceButton.addEventListener("click" , ()=>{
    calculator.backButton()
})

percentBUtton.addEventListener("click",()=> {
    calculator.percent()
})

operatorButton.forEach(button => {
    button.addEventListener("click", (event)=>{
        let {target} = event
        calculator.operation(target.dataset.operator)
    })
})

negotionButton.addEventListener("click",()=>{
    calculator.negotion()
})

numberButton.forEach(button => {
    button.addEventListener("click",(event)=>{
        let {target} = event
        calculator.insertnumber(target.dataset.number)
    })
});

decimalButton.addEventListener("click",()=>{
    calculator.decimal()
})

equalButton.addEventListener("click",()=>{
    calculator.equal()
})



