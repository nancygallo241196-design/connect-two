alert("JS conectado");

document.addEventListener("DOMContentLoaded", function(){

  window.openAuth = function(){
    document.getElementById("authOverlay").style.display = "flex";
  }

  window.closeAuth = function(){
    document.getElementById("authOverlay").style.display = "none";
  }

  window.showLogin = function(){
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");

    document.querySelectorAll(".tab-btn")[0].classList.add("active");
    document.querySelectorAll(".tab-btn")[1].classList.remove("active");
  }

  window.showRegister = function(){
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");

    document.querySelectorAll(".tab-btn")[1].classList.add("active");
    document.querySelectorAll(".tab-btn")[0].classList.remove("active");
  }

});