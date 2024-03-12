//  step-1:addEventlistener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function(){
        //step-2:  get deposit amount from the withdraw field
        const withdrawField = document.getElementById("withdraw-field");
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseInt(newWithdrawAmountString)

         //step-9: clear the withdraw field
         withdrawField.value= "";

        if(isNaN(newWithdrawAmount)){
                alert("Please give a Right Number");
                return;
        }

        // step-3: get the current total withdraw amount
        const withdrawTotalElement = document.getElementById("withdraw-total");
        const previousWithdrawTotalString = withdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

       


        //step-6: get current total blanc
        const blancTotalElement = document.getElementById("blanc-total");
        const previousTotalBlancString = blancTotalElement.innerText;
        const previousTotalBlanc = parseFloat(previousTotalBlancString);

        if(newWithdrawAmount>previousTotalBlanc){
                alert("You Have not sufficient amount");
                return;
        }

         //step-4: Sum of previous and new withdraw amount
         const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
         //step-5: Set the New Deposit Amount at Deposit Field
        withdrawTotalElement.innerText = currentWithdrawTotal;

        
        // step-7: calculate total blanc
        const currentTotalBlanc = previousTotalBlanc - currentWithdrawTotal;

        // step -8 set the total blanc
        blancTotalElement.innerText = currentTotalBlanc;

        //step-9: clear the withdraw field
        withdrawField.value= "";
})