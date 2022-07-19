const algosdk = require('algosdk');

<script
  src="https://unpkg.com/algosdk@v1.17.0/dist/browser/algosdk.min.js"
  integrity="sha384-a9B05lyY5P6hDuZRdqWCEOD7xn/qAY8gc4B5/SJwy+t8GcUlwpzJ25qHcYwxi1NX"
  crossorigin="anonymous"
></script>

const token = 'Your algod API token'; // Interacting with node
const server = 'http://127.0.0.1';
const port = 8080;
const client = new algosdk.Algodv2(token, server, port);

(async () => {
  console.log(await client.status().do());
})().catch((e) => {
  console.log(e);
});

const DISPENSERACCOUNT = "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA"; // Dispenser Account

// Create Account address and Mnemonic
const createAccount = function () {
    try {
        
        const myaccount = algosdk.generateAccount();
        console.log("Account Address = " + myaccount.addr);
        let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
        console.log("Account Mnemonic = " + account_mnemonic);
        console.log("Account created. Save off Mnemonic and address");
        console.log("Add funds to account using the TestNet Dispenser: ");
        console.log("https://dispenser.testnet.aws.algodev.network/?account=" + myaccount.addr);

        return myaccount;
    }
    catch (err) {
        console.log("err", err);
    }
}

// Fetch the account balance
const accountInfo = await algodClient.accountInformation(ashish.addr).do();
const account_balance = accountInfo.amount;

// Calculating The recurring EMI 
function computeLoan()
{
	var amount = account_balance('amount').value;
	var interest_rate = account_balance('interest_rate').value;
	var months =account_balance('months').value;
	var interest = (account_balance * (interest_rate * .01)) / account_balance;
	var payment = ((account_balance / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	account_balance('payment').innerHTML = "Monthly Payment = $"+payment;
}

