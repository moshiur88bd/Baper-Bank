
//  step-1:addEventlistener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
        //step-2:  get deposit amount from the deposit field
        const depositField = document.getElementById("deposit-field");
        const newDepositAmountString = depositField.value;
        const newDepositAmount = parseFloat(newDepositAmountString);

        //step-4: clear the deposit field
        depositField.value= "";
        
        if(isNaN(newDepositAmount)){
                alert("please give a right amount");
                return;
        }

        // step-3: get the current total deposit amount
        const depositTotalElement = document.getElementById("deposit-total");
        const previousDepositTotalString = depositTotalElement.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalString);

        // step-4: Sum of previous and new deposit amount
        const currentDepositTotal = newDepositAmount + previousDepositTotal;

        //step-6: set the deposit blanc
        depositTotalElement.innerText= currentDepositTotal;

        //step-6: get current total blanc
        const blancTotalElement = document.getElementById("blanc-total");
        const previousTotalBlancString = blancTotalElement.innerText;
        const previousTotalBlanc = parseFloat(previousTotalBlancString);

        // step-7: calculate total blanc
        const currentTotalBlanc = previousTotalBlanc + currentDepositTotal;

        // step-8 set the total blanc
        blancTotalElement.innerText= currentTotalBlanc;

        


})  

