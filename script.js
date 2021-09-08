document.getElementById('addExpenseToTable')
.addEventListener('click',displayExpense);

function createExpenseObject(){
    const expenseItem = {
    expenseType: document.getElementById('optionForPayment').value,
    expenseDate: document.getElementById('spendingDate').value,
    expenseName: document.getElementById('spendingName').value,
    expenseAmount: document.getElementById('moneyUsed').value
 };
 console.log(expenseItem);
 return expenseItem;
}

function createTableDataForTableRow(){
  const cellLocation = document.createElement('td');
  document.getElementById('tableRow').appendChild(cellLocation);
  return cellLocation;
}
// this function does not do anything: Idea was to create textNode for each expenseItem key value. Failed
// function displayExpense(){
//   const cellContent = createTableDataForTableRow();
//   // const expenseObject = createExpenseObject();
//   const expenseItemTextNode1 = document.createTextNode
//   (expenseItem.expenseType);
//   const expenseItemTextNode2 = document.createTextNode
//   (expenseItem.expenseDate);
//   const expenseItemTextNode3 = document.createTextNode
//   (expenseItem.expenseName);
//   const expenseItemTextNode4 = document.createTextNode
//   (expenseItem.expenseAmount);
//   cellContent.appendChild(expenseItemTextNode1);
//   cellContent.appendChild(expenseItemTextNode2);
//   cellContent.appendChild(expenseItemTextNode3);
//   cellContent.appendChild(expenseItemTextNode4);
// }

// this function does not give any error but it does not show the output.
function displayExpense(){
  console.log('this functin ran');
  const cellContent = createTableDataForTableRow();
  const expenseObject = createExpenseObject(); 
  const expenseItemTextNode = document.createTextNode(expenseObject);
  cellContent.appendChild(expenseItemTextNode);
}






