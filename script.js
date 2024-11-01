document.addEventListener("DOMContentLoaded",()=>{

    const expenseForm = document.getElementById("expense-form");
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");

    const submitBtn = document.getElementById("submitBtn")
    const expenseList = document.getElementById("expense-list")
    const totalAmount = document.getElementById("total-amount")

    let total = 0
    submitBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        let name = expenseName.value.trim()
        let amount = parseFloat( expenseAmount.value.trim())
        
        const li = document.createElement("li")
        li.classList.add("expense-item")
        li.innerHTML=`<span class='li-name'>${name}</span> <span>${amount}</span>`
        expenseList.appendChild(li)

        total+=amount

        totalAmount.textContent = total


    })


})