// //check if button has class validated on every blur
// function buttonCheck() {
//   if ( $('#first-name').hasClass("validated") && $('#last-name').hasClass("validated") && $('#email').hasClass("validated") && $('#email-again').hasClass("validated") && $('#password').hasClass("validated") && $('#password-again').hasClass("validated") ) {
//     $("#submit").removeAttr("disabled");
//   }
// }

//things applied to form field when it's validated
function validated(id) {
  $(id).css('border-bottom', '3px solid lightgreen');
  $(id).addClass("validated");
};

//things applied to form field when it throws an error
function error(id) {
  $(id).css('border-bottom', '3px solid tomato');
  $(id).addClass("shake");
  $(id).removeClass("validated");
};

//function to check if field is blank or not. Takes paramter of id to check and char_length to check if input is more than or equal to the length inputed
function notBlank (id, char_length) {
    var value = $(id).val();
    if (value.length >= char_length) {
      return "not blank";
    } else {
      return "blank";
    };
};

function nameField(id) {
  $(id).on('blur', function() {
    if ( notBlank(id, 2) === "not blank" ) {
      validated(id);
    } else {
      error(id);
    };
  }); //function to check if name fields contain at least 2 characters in length
};

nameField("#first-name"); //call nameField function on name field
nameField("#last-name"); //call nameField function on name field
nameField("#text"); //call nameField function on text field
nameField("#text1"); //call nameField function on text field
nameField("#text2"); //call nameField function on text field
nameField("#text3"); //call nameField function on text field

//email validation code. takes parameter id.
function validateEmail(id) {
  var value = $(id).val();
  var atpos=value.indexOf("@");
  var dotpos=value.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=value.length)
    {
      return "not validated";
    } else {
      return "validated";
    };
};

//compare two fields. takes two params, id1 and id2 to compare.
function compare(id, id2) {
  var pw = $(id).val();
  var pw2 = $(id2).val();
  if ( pw != pw2 ) {
    return "no match";
  } else if ( pw === pw2 ) {
    return "match";
  };
};

function emailField(id, id2) { //check if email passes validation and compare both fields
  $(id).on('blur', function() {
    if ( validateEmail(id) === "validated" && compare(id, id2) === "match" ) {
      validated(id);
      validated(id2);
    } else if ( validateEmail(id) === "validated" ) {
      validated(id);
    } else {
      error(id);
    };
  });
  $(id2).on('blur', function() {
    if ( validateEmail(id2) === "validated" && compare(id, id2) === "match" ) {
      validated(id);
      validated(id2);
    } else {
      error(id);
      error(id2);
    };
  });
};

emailField("#email", "#email-again"); //call emailField function on email fields

function passwordField(id, id2) { //check if password long enough and compare both fields
  $(id).on('blur', function() {
    if ( notBlank(id, 6) === "not blank" && compare(id, id2) === "match" ) {
      validated(id);
      validated(id2);
    } else if ( notBlank(id, 6) === "not blank" ) {
      validated(id);
    } else {
      error(id);
    };
  });
  $(id2).on('blur', function() {
    if ( notBlank(id, 6) === "not blank" && compare(id, id2) === "match" ) {
      validated(id);
      validated(id2);
    } else {
      error(id);
      error(id2);
    };
  });
};

passwordField("#password", "#password-again"); //call passwordField function on password fields
