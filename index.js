const amount = document.getElementById("amount"); //input
const foodamount = document.getElementById("foodamount"); //input
const clothamount = document.getElementById("clothamount"); //input
const rentamount = document.getElementById("rentamount"); //input
const calculate = document.getElementById("calculate"); //btn

const totalexpense = document.getElementById("totalexpense"); //display
const balance = document.getElementById("balance"); //display

const save = document.getElementById("save"); //save input
const savebtn = document.getElementById("savebtn"); //save btn
const saveamount = document.getElementById("saveamount"); //save amount display
const allamount = document.getElementById("allamount"); //all amount

calculate.addEventListener("click", () => {
  let fc = Number(foodamount.value);
  let cc = Number(clothamount.value);
  let rc = Number(rentamount.value);
  let te = Number(totalexpense.innerText);
  let am = Number(amount.value);
  let bl = Number(balance.innerText);

  totalexpense.innerText = te + fc + cc + rc;
  balance.innerText = am - (te + fc + cc + rc);
  foodamount.value = "";
  clothamount.value = "";
  rentamount.value = "";
});

savebtn.addEventListener("click", () => {
  let amt = Number(amount.value);
  let samt = Number(save.value);

  if (typeof amt == "number") {
    let saveamountconvert = Number(saveamount.innerText);
    let allamountconvert = Number(allamount.innerText);
    saveamount.innerText =
      saveamountconvert + (allamountconvert + amt * samt) / 100;
    allamount.innerText = allamountconvert + amt;
    amount.value = "";
    save.value = "";
  } else {
    alert("Please Enter Your Amount:?");
  }
});

// console.log(Number(NaN));
