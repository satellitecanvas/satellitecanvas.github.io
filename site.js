function aboutMeFunction() {
  document.getElementById("aboutme").style.zIndex = "1";
  document.getElementById("aboutme").style.visibility = "visible";
  document.getElementById("projects").style.visibility = "hidden";
  document.getElementById("skills").style.visibility = "hidden";
};

function projectsFunction() {
  document.getElementById("projects").style.zIndex = "1";
  document.getElementById("projects").style.visibility = "visible";
  document.getElementById("aboutme").style.visibility = "hidden";
  document.getElementById("skills").style.visibility = "hidden";
}:

function skillsFunction() {
  document.getElementById("skills").style.zIndex = "1";
  document.getElementById("skills").style.visibility = "visible";
  document.getElementById("aboutme").style.visibility = "hidden";
  document.getElementById("projects").style.visibility = "hidden";
};

