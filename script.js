document.getElementById('addExpenseToTable')
.addEventListener('click',expenseItem);


function createExpenseOject(){
  const expenseItem = {
    expenseType: document.getElementById('optionForPayment').value,
    expenseDate: document.getElementById('spendingDate').value,
    expenseName: document.getElementById('spendingName').value,
    expenseAmount: document.getElementById('moneyUsed').value
 };
 return expenseItem;
}

function createTableDataForTableRow(){
  const cellLocation = document.createElement('td');
  document.getElementById('tableData').appendChild(cellLocation);
  return cellLocation;
}






