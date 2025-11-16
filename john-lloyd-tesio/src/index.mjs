// 1. The E-Commerce Inventory Processor

function calculateFinalItemPrices(OrigPrice, DiscountRate, ShippingFee) {
  const finalPrices = OrigPrice.map((price) => {
    const discountedPrice = price * (1 - DiscountRate);
    const finalPrice = discountedPrice + ShippingFee;
    const roundedPrice = Math.round(finalPrice * 100) / 100;
    return roundedPrice;
  });
  return finalPrices;
}

const prices = [35000, 12500, 3500, 1800];
const rate = 0.12;
const fee = 350;

const result = calculateFinalItemPrices(prices, rate, fee);

console.log("Original Prices:", prices);
console.log("Final Prices:", result);

// 2. The HR Performance Auditor

const employeeRecords = [
  { id: "E101", score: 92, department: "Sales", hired: 2023 },
  { id: "E102", score: 75, department: "Sales", hired: 2024 },
  { id: "E103", score: 88, department: "Marketing", hired: 2022 },
  { id: "E104", score: 95, department: "Finance", hired: 2024 },
  { id: "E105", score: 67, department: "Marketing", hired: 2023 },
  { id: "E106", score: 85, department: "HR", hired: 2022 },
  { id: "E107", score: 78, department: "Finance", hired: 2023 },
  { id: "E108", score: 90, department: "Sales", hired: 2024 },
  { id: "E109", score: 82, department: "HR", hired: 2022 },
  { id: "E110", score: 88, department: "Marketing", hired: 2023 },
];

function getBonusEligibleEmployees(employeeRecords) {
  const eligibleEmployees = employeeRecords.filter((employee) => {
    const meetsScore = employee.score >= 85;
    const meetsDepartment = employee.department === "Sales";
    const meetsTenure = employee.hired < 2024;
    return meetsScore && meetsDepartment && meetsTenure;
  });

  const finalBonusList = eligibleEmployees.map((employee) => {
    return {
      id: employee.id,
      score: employee.score,
    };
  });
  return finalBonusList;
}

const bonusRecipients = getBonusEligibleEmployees(employeeRecords);

console.log("Eligible Employees for Bonus:");
console.log(bonusRecipients);

// 3. The Project Manager's Timeline

const projectTasks = [
  { name: "Design", durationDays: 10, cost: 50000 },
  { name: "Development", durationDays: 35, cost: 180000 },
  { name: "Testing", durationDays: 15, cost: 75000 },
  { name: "Deployment", durationDays: 5, cost: 20000 },
  { name: "Maintenance", durationDays: 20, cost: 60000 },
  { name: "Research", durationDays: 8, cost: 30000 },
  { name: "Planning", durationDays: 12, cost: 40000 },
  { name: "Implementation", durationDays: 30, cost: 150000 },
  { name: "Review", durationDays: 7, cost: 25000 },
  { name: "Documentation", durationDays: 6, cost: 15000 },
];

function calculateProjectTotals(projectTasks) {
  const initialAccumulator = {
    totalDuration: 0,
    totalCost: 0,
  };

  const projectTotals = projectTasks.reduce((accumulator, task) => {
    accumulator.totalDuration += task.durationDays;

    accumulator.totalCost += task.cost;
    return accumulator;
  }, initialAccumulator);
  return {
    durationDays: projectTotals.totalDuration,
    totalCost: projectTotals.totalCost,
  };
}

const totals = calculateProjectTotals(projectTasks);

console.log("Total Project Estimates:");
console.log(totals);

// 4. The CRM Lead Scorer

const salesLeads = [
  { leadId: "L001", engagementPoints: 45 },
  { leadId: "L002", engagementPoints: 120 },
  { leadId: "L003", engagementPoints: 15 },
  { leadId: "L004", engagementPoints: 78 },
  { leadId: "L005", engagementPoints: 200 },
  { leadId: "L006", engagementPoints: 34 },
  { leadId: "L007", engagementPoints: 89 },
  { leadId: "L008", engagementPoints: 56 },
  { leadId: "L009", engagementPoints: 143 },
  { leadId: "L010", engagementPoints: 67 },
];

function assignLeadStatus(leadRecords) {
  const scoredLeads = leadRecords.map((lead) => {
    let status = "";
    const points = lead.engagementPoints;

    if (points >= 100) {
      status = "Hot Lead";
    } else if (points >= 50) {
      status = "Warm Lead";
    } else {
      status = "Cold Lead";
    }

    return {
      ...lead,
      status: status,
    };
  });

  return scoredLeads;
}

const scoredLeads = assignLeadStatus(salesLeads);

console.log("Scored Sales Leads:");
console.log(scoredLeads);

console.log("\nOriginal Sales Leads Array (Unchanged):");
console.log(salesLeads);

// 5.  The Configuration Manager

const BASE_CONFIG = { theme: "dark", notifications: true, logging: false };

const updatePatches = [
  { notifications: false, logging: true },
  { theme: "light" },
  { notifications: true },
];

function applyConfigPatches(baseConfig, updatePatches) {
  const finalConfig = updatePatches.reduce(
    (currentConfig, patch) => {
      return {
        ...currentConfig,
        ...patch,
      };
    },
    { ...baseConfig }
  );

  return finalConfig;
}

const finalConfiguration = applyConfigPatches(BASE_CONFIG, updatePatches);

console.log("Final Merged Configuration:");
console.log(finalConfiguration);

// 6. The Database Aggregator

const monthlyExpenseReports = [
  { Rent: 1500, Utilities: 250, Food: 800 },
  { Rent: 1500, Utilities: 300, Food: 750, Travel: 200 },
  { Rent: 1500, Food: 900, Entertainment: 150 },
  { Rent: 1500, Utilities: 275, Food: 850, Travel: 300 },
  { Rent: 1500, Utilities: 260, Food: 800, Entertainment: 200 },
  { Rent: 1500, Utilities: 290, Food: 950, Travel: 250 },
  { Rent: 1500, Utilities: 280, Food: 870, Entertainment: 180 },
  { Rent: 1500, Utilities: 310, Food: 920, Travel: 220 },
  { Rent: 1500, Utilities: 265, Food: 830, Entertainment: 160 },
  { Rent: 1500, Utilities: 295, Food: 890, Travel: 270 },
  { Rent: 1500, Utilities: 285, Food: 860, Entertainment: 190 },
  { Rent: 1500, Utilities: 300, Food: 940, Travel: 300 },
];

function calculateMonthlyTotals(monthlyExpenseReports) {
  const monthlyTotals = monthlyExpenseReports.map((monthReport) => {
    const expenseValues = Object.values(monthReport);
    const monthSum = expenseValues.reduce((acc, curr) => acc + curr, 0);
    return monthSum;
  });

  return monthlyTotals;
}

const expenseTotals = calculateMonthlyTotals(monthlyExpenseReports);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log("Monthly Expenses:");
for (let i = 0; i < expenseTotals.length; i++) {
  console.log(`${months[i]}: ${expenseTotals[i].toLocaleString()}`);
}
