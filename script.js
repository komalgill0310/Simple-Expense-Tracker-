document.getElementById('addExpenseToTable')
.addEventListener('click', () => {
  const expenseTypeInput = document.getElementById('optionForPayment');
  const expenseDateInput = document.getElementById('spendingDate');
  const expenseLocationInput = document.getElementById('spendingName');
  const expenseAmountInput = document.getElementById('moneyUsed');
  const expenseDescriptionInput = 
  document.getElementById('spendingDescription');

  const expenseItem = {
    expenseType: expenseTypeInput.value,
    expenseDate: expenseDateInput.value,
    expenseLocation: expenseLocationInput.value,
    expenseAmount: expenseAmountInput.value,
    expenseDescription: expenseDescriptionInput.value
  };
  return displayExpense(expenseItem);
});

function createTableRow(){
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('class','row');
  return tableRow;
}

function createTableData(){
  const tableData = document.createElement('td');
  return tableData;
}

function createDeleteButton(){
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "X";
  deleteButton.setAttribute('class','delete');
  return deleteButton;
}

function displayExpense(expense){

  if(expense.expenseType,expense.expenseDate,expense.expenseLocation,expense.expenseAmount,expense.expenseDescription==="") return;

  const tableRow = createTableRow();
  const instanceOfCreateDeleteButton = createDeleteButton();

  const expenseTypeCell = createTableData();
  const expenseDateCell = createTableData();
  const expenseLocationCell = createTableData();
  const expenseAmountCell = createTableData();
  const expenseDescriptionCell = createTableData();
  const deleteCell = createTableData();

  const tableBody = document.getElementById('tableBody');
  const addRowToBody = tableBody.appendChild(tableRow);

  addRowToBody.appendChild(expenseTypeCell);
  addRowToBody.appendChild(expenseDateCell);
  addRowToBody.appendChild(expenseLocationCell);
  addRowToBody.appendChild(expenseAmountCell);
  addRowToBody.appendChild(expenseDescriptionCell);
  addRowToBody.appendChild(deleteCell);

  deleteCell.appendChild(instanceOfCreateDeleteButton);

  expenseTypeCell.textContent = expense.expenseType;
  expenseDateCell.textContent = expense.expenseDate;
  expenseLocationCell.textContent = expense.expenseLocation;
  expenseAmountCell.textContent = expense.expenseAmount;
  expenseDescriptionCell.textContent = expense.expenseDescription;    
  
  document.getElementById('myForm').reset();  
}

document.getElementById('displayInput').addEventListener('click', (e) => {
  e.target.parentElement.parentElement.remove();
});

  
  











