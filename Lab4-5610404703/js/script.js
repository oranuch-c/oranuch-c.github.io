$(function() {
  // alert("hello");
  // $(selector).action();
  // $('.thing').fadeOut();
    // $('.thing').hide();
  // $('#box').hide();
  // $('h1').css("color","blue");

  // $('h2.h3.h4').css('border','solid 1px red');
  // $('p.lead').css('border','solid 1px red');
  // $('#box').click(function() {
  //   alert("yot just clicked the box");
  // });

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("show").innerHTML =
      // this.responseText;
      var text = this.responseText.split(".txt");
      for (i = 0; i < text.length; i++){
           $('#province').append($('<option>',
           {
              value: text[i],
              text : text[i]
          }));
      }
    }
  };
  xhttp.open("GET", "77_Province/allProvince.txt", false);
  xhttp.send();

  $('#box').click(function() {
    $(this).fadeTo(1000, 0.25, function() {
      $(this).slideUp();
    });
  });

  $('div.hidden').slideDown();


  // $("button").click(function() {
  //   // $('#box').slideToggle();
  //   loadDoc();
  // });

  $("#submit").click(function() {
    // $('#box').slideToggle();
    if(validateForm()) {
      // alert(checkOld());

      var hello = "Hello! ";
      var fname = document.forms["form"]["First name"].value;
      var lname = document.forms["form"]["Last name"].value;

      if(checkOld()<13){
        hello += '\"'+fname+"  "+lname+"\"";
        $("body").css('background','url(image/children.jpg)');
        $("body").css('font-family','torsilp-gimchi');
        $("body").css('font-size','150%');
        $("form").css('background-color','#6AFB92');
        $("p").css('background', '#6AFB92');
        $("p").css('border-style', 'outset');
      }
      else if(document.getElementById("male").checked == true){
        $("body").css('background','url(image/man.jpg)');
        $("body").css('font-family','WDB_Bangna');
        // $("body").css('font-size','150%');
        $("form").css('background-color','#4c4646');
        hello += 'Mr. \"'+fname+"  "+lname+"\"";
        $("p").css('border-style', 'outset');
        $("p").css('background', '#4c4646');
        $("p").css('color', '#ffffff');
      }
      else{
        $("body").css('background','url(image/woman.jpg)');
        $("body").css('font-family','waan-free_regular');
        $("body").css('font-size','250%');
        $("form").css('background-color','#EE9A4D');
        hello += 'Mrs. \"'+fname+"  "+lname+"\"";
        $("p").css('border-style', 'outset');
        $("p").css('background', '#EE9A4D');
      }
      alert(hello);

      var element = document.getElementById("province");
      var province = element.options[element.selectedIndex].text;

      $("h2").text(province);

      var province_name = element.options[element.selectedIndex].text+".txt";
      loadDoc(province_name);
      $(".sign").show();
      var path = "77_Province/sign/"+province+".png";
      $("#sign").attr("src",path);
    }

  });

  $("#reset").click(function() {
    // $('#box').slideToggle();
    document.getElementById("form").reset();
  });

  $("input").blur(function() {
    if( $(this).val() =="" ) {
      $(this).css('border','solid 1px red');
      $('#box').text('Forgot to add text?')
    }
  });

  $("input").keydown(function() {
    if( $(this).val() !=="" ) {
      $(this).css('border','solid 1px #777');
      $('#box').text('Thanks for that')
    }
  });

  $('#box').hover(function() {
    $(this).text('you hovered in!');
  }, function() {
    $(this).text('you hovered out!');
  });

  $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();

  function loadDoc(name) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("show").innerHTML =
        this.responseText;
      }
    };
    var path = "77_Province/motto/"+name;
    xhttp.open("GET", path, false);
    xhttp.send();
  }


  function validateForm() {
    alert_txt = "";

    alert_txt += checkBlank("First name");
    alert_txt += checkBlank("Last name");
    // alert_txt += checkDay("Birthday");
    alert_txt += checkSelected("province");

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

  function checkDay(name) {
    var alert_txt = "";
    var birthday = document.forms["form"][name].value;
    if (birthday != "" && birthday != null) {
      var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // Match the date format through regular expression
      if(!birthday.match(dateformat)) {
        alert_txt = "\""+name+"\" is in a wrong format. \n";
      }
    }
    else {
      alert_txt = "\""+name+"\" must be filled out. \n";
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

  function checkOld() {
    var mydate = document.getElementById('dat').value;
    //alert(mydate);
    var yf = mydate.split("-")[0];
    var mf = mydate.split("-")[1];
    var df = mydate.split("-")[2];

    var old = 2017-yf;
    return old;

  }

});
