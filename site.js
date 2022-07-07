var aboutMe = (function($){
  return {
      aboutMe: function() {
        document.getElementById("aboutme").style.zIndex = "1";
        document.getElementById("aboutme").style.visibility = "visible";
        document.getElementById("projects").style.visibility = "hidden";
        document.getElementById("skills").style.visibility = "hidden";
      },
  };
}(jQuery));

var projects = function() {
  document.getElementById("projects").style.zIndex = "1";
  document.getElementById("projects").style.visibility = "visible";
  document.getElementById("aboutme").style.visibility = "hidden";
  document.getElementById("skills").style.visibility = "hidden";
}:

var skills = function() {
  document.getElementById("skills").style.zIndex = "1";
  document.getElementById("skills").style.visibility = "visible";
  document.getElementById("aboutme").style.visibility = "hidden";
  document.getElementById("projects").style.visibility = "hidden";
};