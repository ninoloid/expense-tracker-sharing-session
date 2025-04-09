let expenses = {};
let savings = [];

updateExpenses();
updateSavings();

function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const result = formatter.format(amount);

  return result;
}

function addExpense() {
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;

  const parsedAmount = parseInt(amount);

  // validate
  if (!amount || parsedAmount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  if (!expenses[category]) {
    expenses[category] = [];
  }

  expenses[category].push(parsedAmount);
  document.getElementById("amount").value = "";

  updateExpenses();
}

function updateExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  let overallTotal = 0;
  let totalPerCategory = {};

  for (let category in expenses) {
    expenses[category].forEach((amount, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${category}: ${formatCurrency(amount)}</span>`;

      const btn = document.createElement("button");
      btn.textContent = "X";
      btn.className = "delete";
      btn.onclick = () => deleteExpense(category, index);
      li.appendChild(btn);
      expenseList.appendChild(li);

      overallTotal += amount;
      totalPerCategory[category] = (totalPerCategory[category] || 0) + amount;
    });
  }

  document.getElementById("overallTotal").textContent =
    formatCurrency(overallTotal);

  const totalCategoryList = document.getElementById("totalPerCategory");
  totalCategoryList.innerHTML = "";
  for (let category in totalPerCategory) {
    const li = document.createElement("li");
    li.textContent = `${category}: ${formatCurrency(
      totalPerCategory[category]
    )}`;
    totalCategoryList.appendChild(li);
  }

  calculateRemainingSavings(); // Ensure savings update properly
}

function deleteExpense(category, index) {
  expenses[category].splice(index, 1);
  if (expenses[category].length === 0) {
    delete expenses[category];
  }

  updateExpenses();
}

function calculateRepayment() {
  const totalDebt = parseInt(document.getElementById("totalDebt").value);
  const monthlyPayment = parseInt(
    document.getElementById("monthlyPayment").value
  );

  // validate
  if (!totalDebt || totalDebt <= 0 || !monthlyPayment || monthlyPayment <= 0) {
    alert("Please enter a valid debt and monthly payment amounts!");
    return;
  }

  document.getElementById("repaymentMonths").textContent = Math.ceil(
    totalDebt / monthlyPayment
  );
}

function addSavings() {
  const amount = document.getElementById("savingsAmount").value;
  const parsedAmount = parseInt(amount);

  // validate
  if (!amount || parsedAmount <= 0) {
    alert("Please enter a valid savings amount!");
    return;
  }

  savings.push(parsedAmount);
  document.getElementById("savingsAmount").value = "";

  updateSavings();
}

function updateSavings() {
  const savingsList = document.getElementById("savingsList");
  savingsList.innerHTML = "";

  const totalSavings = savings.reduce((sum, amount) => sum + amount, 0);

  savings.forEach((amount, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${formatCurrency(amount)}</span>`;

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.className = "delete";
    btn.onclick = () => deleteSavings(index);

    li.appendChild(btn);
    savingsList.appendChild(li);
  });

  document.getElementById("totalSavings").textContent =
    formatCurrency(totalSavings);

  calculateRemainingSavings();
}

function deleteSavings(index) {
  savings.splice(index, 1);
  updateSavings();
}

function calculateRemainingSavings() {
  const totalSavings = savings.reduce((sum, amount) => sum + amount, 0);

  const totalExpenses = Object.values(expenses)
    .flat()
    .reduce((sum, amount) => sum + amount, 0);

  const remainingSavings = totalSavings - totalExpenses;

  document.getElementById("remainingSavings").textContent =
    formatCurrency(remainingSavings);
}
