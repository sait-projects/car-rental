var xhr = new XMLHttpRequest();
var r;
var customer;
window.onload = loadData;

function homePage() {
  location.href = "./index.html";
}

function setTodaysDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("arriveDate1").setAttribute("min", today);
  document.getElementById("arriveDate2").setAttribute("min", today);
  document.getElementById("arriveDate3").setAttribute("min", today);
  document.getElementById("arriveDate4").setAttribute("min", today);
}

function setDepartDate(arrivalDate, num) {
  document.getElementById("departDate1").setAttribute("min", arrivalDate);
  document.getElementById("departDate2").setAttribute("min", arrivalDate);
  document.getElementById("departDate3").setAttribute("min", arrivalDate);
  document.getElementById("departDate4").setAttribute("min", arrivalDate);
  document.getElementById("departDate" + num).disabled = false;
}

function loadData() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      r = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "./res/rentalclients.json", true);
  xhr.send();
}

function searchLastName(lastName) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by Last Name" + "<br>";
  //structure table
  var output =
    "<tr><th scope='col'>Last Name</th><th scope='col'>First Name</th><th scope='col'>Address</th><th scope='col'>State/Prov</th><th scope='col'>Email</th><th scope='col'>Phone#</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.last_name.toLowerCase();
    if (searchname.startsWith(lastName.toLowerCase())) {
      output += "<tr onclick=fillInfo('" + obj.last_name + "')><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.address;
      output += "</td><td>";
      output += obj.state_prov;
      output += "</td><td>";
      output += obj.email;
      output += "</td><td>";
      output += obj.phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchFirstName(firstName) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by First Name" + "<br>";
  //structure table
  var output =
    "<tr><th scope='col'>Last Name</th><th scope='col'>First Name</th><th scope='col'>Address</th><th scope='col'>State/Prov</th><th scope='col'>Email</th><th scope='col'>Phone#</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.first_name.toLowerCase();
    if (searchname.startsWith(firstName.toLowerCase())) {
      output += "<tr onclick=fillInfo('" + obj.last_name + "')><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.address;
      output += "</td><td>";
      output += obj.state_prov;
      output += "</td><td>";
      output += obj.email;
      output += "</td><td>";
      output += obj.phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchAddress(address) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by Address" + "<br>";
  //structure table
  var output =
    "<tr><th scope='col'>Last Name</th><th scope='col'>First Name</th><th scope='col'>Address</th><th scope='col'>State/Prov</th><th scope='col'>Email</th><th scope='col'>Phone#</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.address.toLowerCase();
    if (searchname.startsWith(address.toLowerCase())) {
      output += "<tr onclick=fillInfo('" + obj.last_name + "')><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.address;
      output += "</td><td>";
      output += obj.state_prov;
      output += "</td><td>";
      output += obj.email;
      output += "</td><td>";
      output += obj.phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchState(state) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by State/Prov" + "<br>";
  //structure table
  var output =
    "<tr><th scope='col'>Last Name</th><th scope='col'>First Name</th><th scope='col'>Address</th><th scope='col'>State/Prov</th><th scope='col'>Email</th><th scope='col'>Phone#</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.state_prov.toLowerCase();
    if (searchname.startsWith(state.toLowerCase())) {
      output += "<tr onclick=fillInfo('" + obj.last_name + "')><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.address;
      output += "</td><td>";
      output += obj.state_prov;
      output += "</td><td>";
      output += obj.email;
      output += "</td><td>";
      output += obj.phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchEmail(email) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML = "Search by Email" + "<br>";
  //structure table
  var output =
    "<tr><th scope='col'>Last Name</th><th scope='col'>First Name</th><th scope='col'>Address</th><th scope='col'>State/Prov</th><th scope='col'>Email</th><th scope='col'>Phone#</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.email.toLowerCase();
    if (searchname.startsWith(email.toLowerCase())) {
      output += "<tr onclick=fillInfo('" + obj.last_name + "')><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.address;
      output += "</td><td>";
      output += obj.state_prov;
      output += "</td><td>";
      output += obj.email;
      output += "</td><td>";
      output += obj.phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchPhone(phone) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML = "Search by Phone" + "<br>";
  //structure table
  var output =
    "<tr><th scope='col'>Last Name</th><th scope='col'>First Name</th><th scope='col'>Address</th><th scope='col'>State/Prov</th><th scope='col'>Email</th><th scope='col'>Phone#</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.phone.toLowerCase();
    if (searchname.startsWith(phone.toLowerCase())) {
      output += "<tr onclick=fillInfo('" + obj.last_name + "')><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.address;
      output += "</td><td>";
      output += obj.state_prov;
      output += "</td><td>";
      output += obj.email;
      output += "</td><td>";
      output += obj.phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function fillInfo(last) {
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.last_name;
    if (searchname == last) {
      document.getElementById("lastName").value = obj.last_name;
      document.getElementById("first").value = obj.first_name;
      document.getElementById("address").value = obj.address;
      document.getElementById("state").value = obj.state_prov;
      document.getElementById("email").value = obj.email;
      document.getElementById("phone").value = obj.phone;
      customer = obj;
    }
  }
  document.getElementById("reserButton").disabled = false;
}

function displayVehicles() {
  document.getElementById("rentalForm").classList.remove("hide");
  setTodaysDate();
}

function activateButton(num) {
  document.getElementById("reserveButton" + num).disabled = false;
}

function reserve(num) {
  var compact = 15;
  var midSize = 20;
  var luxury = 35;
  var truck = 40;

  var total;
  var accessories = 0;
  var rentalCost = 0;
  var outputTotal;
  var outputRate;
  var outputCar;
  var outputArrival;
  var outputDepart;
  var outputCustomer;

  var roofRack = document.getElementById("roofRack" + num).checked;
  var bikeRack = document.getElementById("bikeRack" + num).checked;
  var gps = document.getElementById("gps" + num).checked;
  var child = document.getElementById("child" + num).checked;
  var arrival = document.getElementById("arriveDate" + num);
  var depart = document.getElementById("departDate" + num);

  var arrivalDate = Date.parse(arrival.value);
  var departDate = Date.parse(depart.value);

  var difference = Math.abs(departDate - arrivalDate);
  var days = difference / (1000 * 3600 * 24);

  if (roofRack || bikeRack) {
    accessories += 5 * days;
    document.getElementById("roofRack").classList.remove("hide");
    document.getElementById("roofRackPrice").classList.remove("hide");
    document.getElementById("accessories").classList.remove("hide");
    document.getElementById("roofRackPrice").innerHTML =
      "$" + (days * 5).toFixed(2);
  }

  if (gps) {
    accessories += 10;
    document.getElementById("gpsPrice").classList.remove("hide");
    document.getElementById("gps").classList.remove("hide");
    document.getElementById("accessories").classList.remove("hide");
  }

  if (child) {
    document.getElementById("childSeatPrice").classList.remove("hide");
    document.getElementById("childSeat").classList.remove("hide");
    document.getElementById("accessories").classList.remove("hide");
  }

  if (num == 1) {
    rentalCost = compact * days;
    outputRate = "<h6 class='text-end'>$" + compact.toFixed(2) + "</h6>";
    outputRate += "<h6 class='text-end'>$" + rentalCost.toFixed(2) + "</h6>";
    outputCar = "<h3>Compact Vehicle</h3>";
    outputCar += "<p>Honda Civic or Similar</p>";
    document.getElementById("modalImage").src = "./images/compact.jpg";
  } else if (num == 2) {
    rentalCost = midSize * days;
    outputRate = "<h6 class='text-end'>$" + midSize.toFixed(2) + "</h6>";
    outputRate += "<h6 class='text-end'>$" + rentalCost.toFixed(2) + "</h6>";
    outputCar = "<h3>Mid-Size Vehicle</h3>";
    outputCar += "<p>Nissan Maxima or Similar</p>";
    document.getElementById("modalImage").src = "./images/mid-size.jpg";
  } else if (num == 3) {
    rentalCost = luxury * days;
    outputRate = "<h6 class='text-end'>$" + luxury.toFixed(2) + "</h6>";
    outputRate += "<h6 class='text-end'>$" + rentalCost.toFixed(2) + "</h6>";
    outputCar = "<h3>Luxury Vehicle</h3>";
    outputCar += "<p>Porsche 911 or Similar</p>";
    document.getElementById("modalImage").src = "./images/luxury.jpg";
  } else if (num == 4) {
    rentalCost = truck * days;
    outputRate = "<h6 class='text-end'>$" + truck.toFixed(2) + "</h6>";
    outputRate += "<h6 class='text-end'>$" + rentalCost.toFixed(2) + "</h6>";
    outputCar = "<h3>Truck/Van Vehicle</h3>";
    outputCar += "<p>Ford F-150 or Similar</p>";
    document.getElementById("modalImage").src = "./images/truck.jpg";
  }

  outputCustomer = "<strong>" + customer.first_name + " </strong>";
  outputCustomer += "<strong>" + customer.last_name + "</strong>";
  outputCustomer +=
    "<p class='m-0'>" + customer.address + " " + customer.state_prov + "</p>";
  outputCustomer += "<p class='m-0'>" + customer.email + "</p>";
  outputCustomer += "<p class='m-0'>" + customer.phone + "</p>";

  outputArrival = "<strong>" + arrival.value + " | 12:00PM</strong>";
  outputArrival += "<p class='m-0'>Calgary Intl Airport</p>";
  outputArrival += "<p class='m-0'>2000 Airport RD NE</p>";
  outputArrival += "<p class='m-0'>Calgary, AB, T2E 6W5</p>";
  outputArrival += "403 735-1200";

  outputDepart = "<strong>" + depart.value + " | 12:00PM</strong>";
  outputDepart += "<p class='m-0'>Calgary Intl Airport</p>";
  outputDepart += "<p class='m-0'>2000 Airport RD NE</p>";
  outputDepart += "<p class='m-0'>Calgary, AB, T2E 6W5</p>";
  outputDepart += "403 735-1200";

  document.getElementById("customerInfo").innerHTML = outputCustomer;
  document.getElementById("pickup").innerHTML = outputArrival;
  document.getElementById("returnTime").innerHTML = outputDepart;
  document.getElementById("typeOfCar").innerHTML = outputCar;
  document.getElementById("modalRates").innerHTML = outputRate;

  total = accessories + rentalCost;

  outputTotal =
    "<h4>Total: $<span style='color: green'>" +
    total.toFixed(2) +
    "</span></h4>";

  document.getElementById("modalTotal").innerHTML = outputTotal;
}

function resetOptions() {
  document.getElementById("roofRack1").checked = false;
  document.getElementById("bikeRack1").checked = false;
  document.getElementById("gps1").checked = false;
  document.getElementById("child1").checked = false;

  document.getElementById("roofRack2").checked = false;
  document.getElementById("bikeRack2").checked = false;
  document.getElementById("gps2").checked = false;
  document.getElementById("child2").checked = false;

  document.getElementById("roofRack3").checked = false;
  document.getElementById("bikeRack3").checked = false;
  document.getElementById("gps3").checked = false;
  document.getElementById("child3").checked = false;

  document.getElementById("roofRack4").checked = false;
  document.getElementById("bikeRack4").checked = false;
  document.getElementById("gps4").checked = false;
  document.getElementById("child4").checked = false;
}
