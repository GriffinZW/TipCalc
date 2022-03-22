function calcTip(){
  let tipForm = document.getElementById('tipForm').value;
  let billAmount = document.getElementById('billInput').value;
/* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
  let tipForm = parsefloat('tipAmount');
  let billAmount = parsefloat('billInput');

/* --------------------------------Step 3: grab the elements---------------------------------------------------------- */
  let bill = document.getElementById('bill-p');
  let tip = document.getElementById('tip-p');
  let total = document.getElementById('total-p');

/* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
  let totalTip = tipAmount * billAmount;                                                          // calulate total tip (tip % * bill) and store it in the a new variable
  let totalTip = tipAmount + billAmount;                                                        // calcualte total bill (totalTip + billAmount) and store it in a new variable


/* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
                                                          // change the innerHTML of the tip var from step 3 to the total tip from step 4
                                                          



total.innerHTML = "$" + totalBill.toFixed(2)
}
