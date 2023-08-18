document.getElementById("Login").addEventListener("click",function(){
   var h = document.getElementById('hide');
   var g = document.getElementById('cn');
   g.style.display='block';
   g.classList.remove('d-none');
   h.style.display='none';
});
// back button
document.getElementById("but").addEventListener("click",function(){
    var page = document.getElementById('hide');
    var cl = document.getElementById('cn');
    cl.classList.add('d-none');
    page.style.display = "block";
});


//button Effects!



document.getElementById('buttonOne').addEventListener('click', function () {
    const depositAmount = parseFloat(document.getElementById('inputOne').value);
    const currentDepositNum = parseFloat(document.getElementById('valueOne').innerText);
    const toalBalance= parseFloat(document.getElementById('valueThree').innerText);
    const total = depositAmount + currentDepositNum;
    const totalBalanceNum= toalBalance + depositAmount;
    
    document.getElementById('valueOne').innerText = total;
    document.getElementById('valueThree').innerText = totalBalanceNum;

    document.getElementById('inputOne').value='';
});
document.getElementById('buttonTwo').addEventListener('click', function () {
    const depositAmountT = parseFloat(document.getElementById('inputTwo').value);
    const currentDepositNumT = parseFloat(document.getElementById('valueTwo').innerText);
    const toalBalanceT= parseFloat(document.getElementById('valueThree').innerText);
    const totalT = depositAmountT - currentDepositNumT;
    const totalBalanceNumT= toalBalanceT - depositAmountT;
    
    document.getElementById('valueTwo').innerText = totalT;
    document.getElementById('valueThree').innerText = totalBalanceNumT;

    document.getElementById('inputTwo').value='';
});
