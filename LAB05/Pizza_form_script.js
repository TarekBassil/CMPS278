function $(id)  { return document.getElementById(id); }

function getSize()  {
    var size = document.getElementById("size").value;
    return size;
}

function getMeat()  {
    let checkboxes = document.querySelectorAll('input[name="meattop"]:checked');
    let meat = [];
    checkboxes.forEach((checkbox) => {
        meat.push(checkbox.value);
    });
    return meat;
}

function getVeg()  {
    let checkboxes = document.querySelectorAll('input[name="veggies"]:checked');
    let veg = [];
    checkboxes.forEach((checkbox) => {
        veg.push(checkbox.value);
    });
    return veg;
}

function getCheese()  {
    const radioButtons = document.querySelectorAll('input[name="cheese"]');
    let cheese;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            cheese = radioButton.value;
            break;
        }
    }
    return cheese;
}

function ChangePizzaSize()  {
    var rangeslider = getSize();
    var output = $("text_size");
    var size = $("pizza_size");

    if (rangeslider == 1)   {
        output.innerHTML = "Small 6$";
        size.style.width = "100px";
    }
    else if (rangeslider == 2)   {
        output.innerHTML = "Medium 10$";
        size.style.width = "150px";
    }
    else if (rangeslider == 3)   {
        output.innerHTML = "Large 14$";
        size.style.width = "200px";
    }
    else if (rangeslider == 4)   {
        output.innerHTML = "X-Large 16$";
        size.style.width = "250px";
    }
}

function calculateTotal()   {
    var s = getSize();
    if (s == 1)   {
        var size = 6;
    }
    else if (s == 2)   {
        var size = 10;
    }
    else if (s == 3)   {
        var size = 14;
    }
    else if (s == 4)   {
        var size = 16;
    }
    var meat = getMeat().length*2;
    var veg = getVeg().length;
    var ch = getCheese();
    var cheese = 0;
    if (ch == 3)    {
        cheese = 3;
    }
    return(size+meat+veg+cheese);
}

function fillSummary()  {
    var fname = $("fname").value;
    var lname = $("lname").value;
    var email = $("email").value;
    var phone = $("phone").value;
    var city = $("city").value;
    var addr = $("address").value;
    var dlvr = $("dlvrTo");
    dlvr.innerHTML = "Name: " + fname + " " + lname + "<br>E-mail: " + email + "<br>Phone number: " + phone + "<br>Address: " + city + " - " + addr;

    var output = $('orderList');
    var s = getSize();
    var size;
    if (s==1)   {
        size = "-Small size";
    }
    else if (s==2)   {
        size = "-Medium size";
    }
    else if (s==3)   {
        size = "-Large size";
    }
    else if (s==4)   {
        size = "-X-Large size";
    }
    var order = "<li>"+size+"</li>";

    var c = getCheese();
    var cheese;
    if (c == 1) {
        cheese = "Regular Cheese";
    }
    else if (c == 2) {
        cheese = "No Cheese";
    }
    else if (c == 3) {
        cheese = "Extra Cheese";
    }
    order += "<li>"+cheese+"</li>";

    var m = getMeat();
    for (let i = 0; i<m.length; i++)    {
        order += "<li>"+m[i]+"</li>";
    }

    var v = getVeg();
    for (let i = 0; i<v.length; i++)    {
        order += "<li>"+v[i]+"</li>";
    }

    output.innerHTML = order;

    var tot = $('total');
    tot.innerHTML = "Total: " + calculateTotal() + "$";
}

function checkInfo()    {
    var fname = $("fname").value;
    var lname = $("lname").value;
    var email = $("email").value;
    var phone = $("phone").value;
    var city = $("city").value;
    var addr = $("address").value;
    var message = "Missing:";
    if (fname == '')   {
        message += "\nFirst name";
    }
    if (lname == '')   {
        message += "\nLarst name";
    }
    if (email == '')   {
        message += "\nE-mail";
    }
    if (phone == '')   {
        message += "\nPhone Number";
    }
    if (city == '')   {
        message += "\nCity";
    }
    if (addr == '')   {
        message += "\nAddress";
    }
    if (message != "Missing:")  {
        alert(message);
        return 0;
    }
    else { return 1; }
}

function gotoPage(form) {
    var Pd = $('pizza_details');
    var Ad = $('address_details');
    var Os = $('OrderSummary');
    if (form == "form1")    {
        Pd.style.display = 'block';
        Ad.style.display = 'none';
        Os.style.display = 'none';
        document.body.style.backgroundColor = '#01dddd';
    }
    else if (form == 'form2')   {
        Pd.style.display = 'none';
        Ad.style.display = 'block';
        Os.style.display = 'none';
        document.body.style.backgroundColor = '#e93a57';
    }
    else if (form == 'form3')   {
        if (checkInfo() == 1)   {
            fillSummary()
            Pd.style.display = 'none';
            Ad.style.display = 'none';
            Os.style.display = 'block';
            document.body.style.backgroundColor = '#3fc38e';
        }
    }
}