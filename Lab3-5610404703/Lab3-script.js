function validateForm() {
  alert_txt = "";

  alert_txt += checkBlank("First name");
  alert_txt += checkBlank("Last name");
  alert_txt += checkBlank("House number");
  alert_txt += checkBlank("Street");
  alert_txt += checkBlank("City");
  alert_txt += checkBlank("Province");
  alert_txt += checkBlank("Zipcode");
  alert_txt += checkFormat("Zipcode", 5);
  alert_txt += checkFormat("Phone number", 6);
  alert_txt += checkBlank("Cell phone number");
  alert_txt += checkFormat("Cell phone number", 9);
  alert_txt += checkSelectedDate("birthday");
  alert_txt += checkFormat("Citizenship number", 13);
  alert_txt += checkSelected("zodiac_sign");
  alert_txt += checkSelected("zodiac_year");
  alert_txt += checkSelected("bd_of_week");

  if(alert_txt != "") {
    alert(alert_txt);
    return false;
  }
  else {
    return true;
  }

}

function checkBlank(name) {
  var alert_txt = "";
  var text = document.forms["form"][name].value;
  if (text == "") {
      alert_txt += "\""+name+"\" must be filled out. \n";
  }
  return alert_txt;
}

function checkFormat(name, len) {
  var alert_txt = "";

  if(checkBlank(name)=="") {
    alert_txt += checkBlank(name);

    var text = document.forms["form"][name].value;
    var patt1 = /[0-9]/g;
    var len_match = text.match(patt1).length;

    if(len_match != len){
      alert_txt += "Invalid \""+name+"\" format. \n";
    }
  }
  return alert_txt;
}

function checkSelected(id) {
  alert_txt = "";
  var obj = document.getElementById(id);
  var select = obj.options[obj.selectedIndex].text;
  if(select=="") {
    alert_txt += "Plase select \""+obj.name+"\" . \n";
  }
  return alert_txt;
}

function checkSelectedDate(id) {
  alert_txt = "";
  var text = document.getElementById(id).value;
  if(text=="") {
    alert_txt += "Plase select \""+document.getElementById(id).name+"\" . \n";
  }
  return alert_txt;
}

function submitForm() {
  //  document.getElementById("form").submit();
  if(validateForm()) {
    var text = "Created cookie of \"First name\" and \"Last name\" .\n";
    text += "\tFirst name = "+getCookie("First name")+"\n";
    text += "\tLast name = "+getCookie("Last name")+"\n";
    if(!alert(text)) {
      showForm();
      // document.location = "Lab3-showform.html";
    }
  }
}

function showForm() {
  var show = "";
  show += "First name :  "+document.forms["form"]["First name"].value+"<br>";
  show += "Last name:  "+document.forms["form"]["Last name"].value+"\n";
  show += "House number:  "+ document.forms["form"]["House number"].value+"<br>";
  show += "Street:  "+ document.forms["form"]["Street"].value+"<br>";
  show += "City:  "+ document.forms["form"]["City"].value+"<br>";
  show += "Province:  "+ document.forms["form"]["Province"].value+"<br>";
  show += "Zipcode:  "+ document.forms["form"]["Zipcode"].value+"<br>";
  show += "Phone number:  "+document.forms["form"]["Phone number"].value+"<br>";
  show += "Cell phone number:  "+document.forms["form"]["Cell phone number"].value+"<br>";

  var bd_of_week = document.getElementById("bd_of_week");
  show += "Birthday of Week:  "+ bd_of_week.options[bd_of_week.selectedIndex].text+"<br>";

  show += "Citizenship number:  "+document.forms["form"]["Citizenship number"].value+"<br>";

  var zodiac_sign = document.getElementById("zodiac_sign");
  show += "Zodiac Sign:  "+ zodiac_sign.options[zodiac_sign.selectedIndex].text+"<br>";

  var zodiac_year = document.getElementById("zodiac_year");
  show += "Zodiac Year:  "+ zodiac_year.options[zodiac_year.selectedIndex].text+"\n";


  document.getElementById("show").innerHTML = show;
}
function resetForm() {
  document.getElementById("form").reset();
}

function saveForm() {
  var fname = document.forms["form"]["First name"].value;
  if (fname != "" && fname != null) {
      setCookie("First name", fname, 30);
  }

  var lname = document.forms["form"]["Last name"].value;
  if (lname != "" && lname != null) {
      setCookie("Last name", lname, 30);
  }

  var house_no = document.forms["form"]["House number"].value;
  if (house_no != "" && house_no != null) {
      setCookie("House number", house_no, 30);
  }

  var street = document.forms["form"]["Street"].value;
  if (street != "" && street != null) {
      setCookie("Street", street, 30);
  }

  var city = document.forms["form"]["City"].value;
  if (city != "" && city != null) {
      setCookie("City", city, 30);
  }

  var province = document.forms["form"]["Province"].value;
  if (province != "" && province != null) {
      setCookie("Province", province, 30);
  }

  var zipcode = document.forms["form"]["Zipcode"].value;
  if (zipcode != "" && zipcode != null) {
      setCookie("Zipcode", zipcode, 30);
  }

  var phone_no = document.forms["form"]["Phone number"].value;
  if (phone_no != "" && phone_no != null) {
      setCookie("Phone number", phone_no, 30);
  }

  var cellphone_no = document.forms["form"]["Cell phone number"].value;
  if (cellphone_no != "" && cellphone_no != null) {
      setCookie("Cell phone number", cellphone_no, 30);
  }

  var birthday = document.forms["form"]["Birthday"].value;
  if (birthday != "" && birthday != null) {
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
 // Match the date format through regular expression
    if(birthday.match(dateformat)) {
      setCookie("Birthday", birthday, 30);
    }
  }

  var bd_of_week = document.getElementById("bd_of_week");
  var day = bd_of_week.options[bd_of_week.selectedIndex].text;
  if (day != "" && day != null) {
      setCookie("Birthday of Week", day, 30);
  }

  var citizenship_no = document.forms["form"]["Citizenship number"].value;
  if (citizenship_no != "" && citizenship_no != null) {
      setCookie("Citizenship number", citizenship_no, 30);
  }

  var zodiac_sign = document.getElementById("zodiac_sign");
  var sign = zodiac_sign.options[zodiac_sign.selectedIndex].text;
  if (sign != "" && sign != null) {
      setCookie("Zodiac Sign", sign, 30);
  }

  var zodiac_year = document.getElementById("zodiac_year");
  var year = zodiac_year.options[zodiac_year.selectedIndex].text;
  if (year != "" && year != null) {
      setCookie("Zodiac Year", year, 30);
  }
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var fname = getCookie("First name");
    if (fname != "") {
        document.forms["form"]["First name"].value = fname;
    }

    var lname = getCookie("Last name");
    if (lname != "") {
        document.forms["form"]["Last name"].value = lname;
    }

    var house_no = getCookie("House number");
    if (house_no != "") {
        document.forms["form"]["House number"].value = house_no;
    }

    var street = getCookie("Street");
    if (street != "") {
        document.forms["form"]["Street"].value =  street;
    }

    var city = getCookie("City");
    if (city != "") {
        document.forms["form"]["City"].value = city;
    }

    var province = getCookie("Province");
    if (province != "") {
        document.forms["form"]["Province"].value = province;
    }

    var zipcode = getCookie("Zipcode");
    if (zipcode != "") {
        document.forms["form"]["Zipcode"].value = zipcode;
    }

    var phone_no = getCookie("Phone number");
    if (phone_no != "") {
        document.forms["form"]["Phone number"].value = phone_no;
    }

    var cellphone_no = getCookie("Cell phone number");
    if (cellphone_no != "") {
        document.forms["form"]["Cell phone number"].value = cellphone_no;
    }

    var birthday = getCookie("Birthday");
    if(birthday != ""){
        document.forms["form"]["Birthday"].value = birthday;
    }

    var bd_of_week = getCookie("Birthday of Week");
    if (bd_of_week != "") {
      var x = document.getElementById("bd_of_week");
      x.options[x.selectedIndex].text = bd_of_week;
    }

    var citizenship_no = getCookie("Citizenship number");
    if (citizenship_no != "") {
        document.forms["form"]["Citizenship number"].value = citizenship_no;
    }

    var zodiac_sign = getCookie("Zodiac Sign");
    if (zodiac_sign != "") {
      var x = document.getElementById("zodiac_sign");
      x.options[x.selectedIndex].text = zodiac_sign;
    }

    var zodiac_year = getCookie("Zodiac Year");
    if (zodiac_year != "") {
      var x = document.getElementById("zodiac_year");
      x.options[x.selectedIndex].text = zodiac_year;
    }

    var zodiac_year = document.getElementById("zodiac_year");
    var year = zodiac_year.options[zodiac_year.selectedIndex].text;
    if (year != "" && year != null) {
        setCookie("Zodiac Year", year, 30);
    }
}

function loadForm() {
  // var x = document.getElementById("form");
  // var text = "";
  // var i;
  // for (i = 0; i < x.length ;i++) {
  //     text = x.elements[i].value;
  //     checkCookie(text);
  // }
  checkCookie();
}
