function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Gv3B7G1zbD":
        Script1();
        break;
  }
}

function Script1()
{
  var player1 = GetPlayer();

var url_student_name = player1.GetVar("student_name");
var url_student_email = player1.GetVar("student_email");

var passURL = "http://34.174.135.13/?student_name="+url_student_name+"&student_email="+url_student_email;

window.open(passURL);
}

