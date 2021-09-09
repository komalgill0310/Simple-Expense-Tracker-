document.getElementById('addExpenseToTable')
.addEventListener('click',displayExpense);

// function createExpenseObject(){
//     const expenseItem = {
//     expenseType: document.getElementById('optionForPayment').value,
//     expenseDate: document.getElementById('spendingDate').value,
//     expenseName: document.getElementById('spendingName').value,
//     expenseAmount: document.getElementById('moneyUsed').value
//  };
//  return expenseItem;
// }

const expenseItem = {
      expenseType: document.getElementById('optionForPayment').value,
      expenseDate: document.getElementById('spendingDate').value,
      expenseName: document.getElementById('spendingName').value,
      expenseAmount: document.getElementById('moneyUsed').value
   };

function createTableRowExpenseType(){
  const tableRowForexpenseType = document.createElement('tr');
  return tableRowForexpenseType;
}

function createTableRowExpenseDate(){
   const tableRowForexpenseDate = document.createElement('tr');
   return tableRowForexpenseDate;
}

function createTableRowExpenseName(){
  const tableRowForexpenseName = document.createElement('tr');
  return tableRowForexpenseName;
}

function createTableRowExpenseAmount(){
  const tableRowForexpenseAmount = document.createElement('tr');
  return tableRowForexpenseAmount;
}

function createTableDataForTableRow(){
  const tableData = document.createElement('td');
  return tableData;
}

function displayExpense(){
  console.log('this functin ran');
  // const expenseObject = createExpenseObject();  
  const tableDataInstance = createTableDataForTableRow();
  const i = createTableRowExpenseType();
  const j = createTableRowExpenseDate();
  const k = createTableRowExpenseName();
  const l = createTableRowExpenseAmount();
  const a = tableDataInstance.appendChild(expenseItem.expenseType);
  const b = tableDataInstance.appendChild(expenseItem.expenseDate);
  const c = tableDataInstance.appendChild(expenseItem.expenseName);
  const d = tableDataInstance.appendChild(expenseItem.expenseAmount);
  const p = i.appendChild(a);
  const q = j.appendChild(b);
  const r = k.appendChild(c);
  const s = l.appendChild(d);
  document.getElementById('displayInput').appendChild(p);
  document.getElementById('displayInput').appendChild(q);
  document.getElementById('displayInput').appendChild(r);
  document.getElementById('displayInput').appendChild(s);
}








