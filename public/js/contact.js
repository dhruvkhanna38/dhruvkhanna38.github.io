function validateForm() {
    var name = document.forms["sentMessage"]["name"].value;
    var email = document.forms["sentMessage"]["email"].value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    }  
}
