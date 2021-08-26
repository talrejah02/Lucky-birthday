const DOB = document.querySelector("#DOB")
const lNum = document.querySelector("#luckyNumber")
const btn = document.querySelector("#btn")


function isLucky(){
    const birthDate = DOB.value;
    const sum = calcSum(birthDate);
    if(sum && birthDate){
        compare(sum, lNum.value)
    }
    else{
        response.innerText = "Enter The Fields"
    }
}

function calcSum(birthDate){
    birthDate = birthDate.replaceAll("-","")
    let sum=0;
    for(let i =0 ; i<birthDate.length ; i++){
        sum = sum+ Number(birthDate.charAt(i))
    }
    return sum;
   
}

function compare(sum,luckyNo){
    if(sum % luckyNo === 0){
        response.innerText = "Yayy! Your Birthday Is Lucky 😍"
    }
    else{
        response.innerText = "Sorry! Your Birthday Is Not Lucky 🥺"
    }
}

btn.addEventListener("click", isLucky)