let expenses = {};
let savings = [];

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

  // validate
  if (!amount || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  if (!expenses[category]) {
    expenses[category] = [];
  }

  expenses[category].push(amount);
  document.getElementById("amount").value = "";

  updateExpenses();
}

function updateExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  let overallTotal = 0;
  let totalPerCategory = {};

  for (const category in expenses) {
    expenses[category].forEach((amount, index) => {
      const parsedAmount = parseInt(amount);
      const li = document.createElement("li");
      li.innerHTML = `<span>${category}: ${formatCurrency(
        parsedAmount
      )}</span>`;

      const btn = document.createElement("button");
      btn.textContent = "X";
      btn.className = "delete";
      btn.onclick = () => deleteExpense(category, index);

      li.appendChild(btn);
      expenseList.appendChild(li);

      overallTotal = overallTotal + parseInt(parsedAmount);
      totalPerCategory[category] =
        (totalPerCategory[category] || 0) + parsedAmount;

      document.getElementById("overallTotal").textContent =
        formatCurrency(overallTotal);

      const totalCategoryList = document.getElementById("totalPerCategory");
      totalCategoryList.innerHTML = "";

      for (const category in totalPerCategory) {
        const li = document.createElement("li");
        li.textContent = `${category}: ${formatCurrency(
          totalPerCategory[category]
        )}`;
        totalCategoryList.appendChild(li);
      }
    });
  }
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
