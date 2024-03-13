function convert_to_EGP(amount, currency) {
  // Current exchange rates (you can update these values)
  const rates = {
    dollar: 48.45,
    riyal: 12.92,
    yen:  0.33,
    dinar: 157.75,
    dirham: 13.19
  };

  // Validate the provided currency
  if (!rates.hasOwnProperty(currency)) {
    throw new Error("Unsupported currency");
  }

  // Calculate the converted amount in EGP
  const egypt_Amount = amount * rates[currency];  

  return egypt_Amount;
}

// Get user input (example using prompts)
const amount = parseFloat(prompt("Enter amount:"));
const currency = prompt("Enter currency (dollar, riyal, yen, dinar, dirham):").toLowerCase();

// exception handling for invalid inputs
try {
  const egypt_Amount = convert_to_EGP(amount, currency);
  console.log(`${amount} ${currency} is equal to ${egypt_Amount.toFixed(2)} EGP`);
  document.write(`${amount} ${currency} is equal to ${egypt_Amount.toFixed(2)} EGP`);

} catch (error) {
  console.error(error.message);
}

  


    
    