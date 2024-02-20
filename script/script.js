const allBtnSeat = document.getElementsByClassName("btn-seat");

let count = 0;
for(const btn of allBtnSeat){
    btn.addEventListener("click", function(s){
        
        const classType = "Economy";
        const price = 550;

        const selectedSeat1 = getConvertedValue("selected-seat");
        if(selectedSeat1 + 1 > 4){
            alert("You reached height limit!!!");
            return;
        }
        s.target.setAttribute("disabled", false);
        s.target.style.backgroundColor = "green";

        // Available seats
        const seatAvailable = getConvertedValue("seat-availables");
        document.getElementById("seat-availables").childNodes[1].innerText = seatAvailable - 1;

        // Selected No of seat
        const selectedSeat2 = getConvertedValue("selected-seat");
        document.getElementById("selected-seat").childNodes[1].innerText = selectedSeat2 + 1;

        const bodyContainer = document.getElementById('seatDetailss');
        const div= document.createElement("div");
        div.classList.add("flex");
        div.classList.add("gap-28");

        const seatNo =s.target.innerText;
        const p1 = document.createElement("p");
        p1.innerText = seatNo;
        const p2 = document.createElement("p");
        p2.innerText = classType;
        const p3 = document.createElement("p");
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        bodyContainer.appendChild(div);

        updateTotalCost();
        updateGrandTotal();
    });
}

function updateTotalCost(){
    const price = 550;
    const totalCost = getConvertedValue("total-price");
    const sum = totalCost + price;
    document.getElementById("total-price").childNodes[1].innerText = sum;
}

function updateGrandTotal(check){
    const totalCost = getConvertedValue("total-price");
    if(check == undefined){
        document.getElementById("grand-total").childNodes[1].innerText = totalCost;
    }
    else{
        const coupon1 = document.getElementById("coupon-code").value;
        const coupon2 = document.getElementById("coupon-code").value;
        if(coupon1 == "NEW15"){
            const discount = totalCost * .15;
            document.getElementById("grand-total").childNodes[1].innerText = totalCost - discount;
        }
        else if(coupon2 == "Couple 20"){
            const discount = totalCost*.2;
            document.getElementById("grand-total").childNodes[1].innerText = totalCost - discount;
        }
        else{
            alert("Please enter valid coupon code...");
        }
    }
}

function getConvertedValue(id){
    const value = document.getElementById(id).childNodes[1].innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}