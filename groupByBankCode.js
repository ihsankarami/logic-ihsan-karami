// Please group the array of objects by bankCode and calculate the total incoming and outgoing balances for each bank.
// The data is stored in an array of objects, with each object containing a bankCode, a balance_InOut value, and a transactionType indicating whether the balance is incoming or outgoing.

// Expected result
/*
{
  "SP-0329": {
    "totalDanaMasuk": 700000,
    "totalDanaKeluar": 1250000
  },
  "SP-1234": {
    "totalDanaMasuk": 2300000,
    "totalDanaKeluar": 1300000
  },
  "SP-5678": {
    "totalDanaMasuk": 750000,
    "totalDanaKeluar": 850000
  },
  "SP-8765": {
    "totalDanaMasuk": 300000,
    "totalDanaKeluar": 1750000
  },
  "SP-4321": {
    "totalDanaMasuk": 150000,
    "totalDanaKeluar": 700000
  }
}
*/

const arr = [
  { bankCode: "SP-0329", balance_InOut: 500000, transactionType: "Dana Masuk" },
  {
    bankCode: "SP-1234",
    balance_InOut: 750000,
    transactionType: "Dana Keluar",
  },
  { bankCode: "SP-5678", balance_InOut: 300000, transactionType: "Dana Masuk" },
  { bankCode: "SP-5678", balance_InOut: 450000, transactionType: "Dana Masuk" },
  { bankCode: "SP-1234", balance_InOut: 600000, transactionType: "Dana Masuk" },
  {
    bankCode: "SP-8765",
    balance_InOut: 850000,
    transactionType: "Dana Keluar",
  },
  { bankCode: "SP-1234", balance_InOut: 950000, transactionType: "Dana Masuk" },
  {
    bankCode: "SP-5678",
    balance_InOut: 100000,
    transactionType: "Dana Keluar",
  },
  { bankCode: "SP-0329", balance_InOut: 200000, transactionType: "Dana Masuk" },
  {
    bankCode: "SP-0329",
    balance_InOut: 400000,
    transactionType: "Dana Keluar",
  },
  {
    bankCode: "SP-0329",
    balance_InOut: 650000,
    transactionType: "Dana Keluar",
  },
  {
    bankCode: "SP-1234",
    balance_InOut: 550000,
    transactionType: "Dana Keluar",
  },
  {
    bankCode: "SP-5678",
    balance_InOut: 250000,
    transactionType: "Dana Keluar",
  },
  {
    bankCode: "SP-4321",
    balance_InOut: 700000,
    transactionType: "Dana Keluar",
  },
  { bankCode: "SP-8765", balance_InOut: 300000, transactionType: "Dana Masuk" },
  {
    bankCode: "SP-0329",
    balance_InOut: 200000,
    transactionType: "Dana Keluar",
  },
  { bankCode: "SP-1234", balance_InOut: 750000, transactionType: "Dana Masuk" },
  {
    bankCode: "SP-5678",
    balance_InOut: 500000,
    transactionType: "Dana Keluar",
  },
  { bankCode: "SP-4321", balance_InOut: 150000, transactionType: "Dana Masuk" },
  {
    bankCode: "SP-8765",
    balance_InOut: 900000,
    transactionType: "Dana Keluar",
  },
];

function groupByBankCode() {
  // Write your code here

  // using reduce() to iterate over the array and accumulate the results into object.
  return data.reduce((acc, curr) => {
    //destructure the current transaction (curr) to extract the properties bankCode, balance_InOut, and transactionType
    const { bankCode, balance_InOut, transactionType } = curr;

    // Check if the bank code already exists in acc
    if (!acc[bankCode]) {
      acc[bankCode] = { totalDanaMasuk: 0, totalDanaKeluar: 0 };
    }

    //  check the transactionType to determine whether the transaction is dana Masuk or dana keluar
    //  if the transactionType is dana masuk, add the balance_InOut value to acc[bankCode].totalDanaMasuk.
    // if it's dana keluar, add the balance_InOut value to acc[bankCode].totalDanaKeluar.
    if (transactionType === "Dana Masuk") {
      acc[bankCode].totalDanaMasuk += balance_InOut;
    } else if (transactionType === "Dana Keluar") {
      acc[bankCode].totalDanaKeluar += balance_InOut;
    }

    return acc;
  }, {});
}

module.exports = groupByBankCode;
