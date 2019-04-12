var $ = function(selector) {
  return document.querySelector(selector);
};
$("#btn").onclick = function() {
  $(".menu-container").style.display = "block";
  $(".shade").style.display = "block";
};
$(".menu-container").addEventListener("click", function(e) {
  e.stopPropagation();
  if (e.target.classList.contains("menu-close")) {
    $(".menu-container").style.display = "none";
    $(".shade").style.display = "none";
  }
});
$(".shade").addEventListener("click", function() {
  $(".menu-container").style.display = "none";
  $(".shade").style.display = "none";
});

$(".loginer").onclick = function(e) {
  e.stopPropagation();
  $(".flip-modal").style.display = "block";
};
$(".nav").addEventListener("click", function(e) {
  e.stopPropagation();
  if (e.target.classList.contains("index-login")) {
    $(".flip-modal").style.display = "block";
  }
});
document.addEventListener("click", function() {
  $(".flip-modal").style.display = "none";
});

$(".flip-modal").addEventListener("click", function(e) {
  e.stopPropagation();
  if (e.target.classList.contains("login")) {
    $(".flip-modal").classList.remove("register");
    $(".flip-modal").classList.add("login");
  }
  if (e.target.classList.contains("register")) {
    $(".flip-modal").classList.add("register");
    $(".flip-modal").classList.remove("login");
  }
  window.target = e.target;
  if (e.target.classList.contains("close")) {
    $(".flip-modal").style.display = "none";
  }
});
$(".shade").addEventListener("click", function() {
  $(".flip-modal").style.display = "none";
});
$(".menu-container").addEventListener("click", function() {
  $(".flip-modal").style.display = "none";
});
$(".close").addEventListener("click", function() {
  $(".flip-modal").style.display = "none";
});

$(".modal-login form").addEventListener("submit", function(e) {
  e.preventDefault();
  if (!/^\w{3,8}$/.test($(".modal-login input[name=username]").value)) {
    $(".modal-login .errormsg").innerText =
      "用户名需输入3-8个字符，包括字母数字下划线";
    return false;
  }
  if (!/^\w{6,10}$/.test($(".modal-login input[name=password]").value)) {
    $(".modal-login .errormsg").innerText =
      "密码需输入6-10个字符，包括字母数字下划线";
    return false;
  }
  this.submit();
});

$(".modal-register form").addEventListener("submit", function(e) {
  e.preventDefault();
  if (!/^\w{3,8}$/.test($(".modal-register input[name=username]").value)) {
    $(".modal-register .errormsg").innerText =
      "用户名需输入3-8个字符，包括字母数字下划线";
    return false;
  }
  if (
    /^hunger$|^ruoyu$/.test($(".modal-register input[name=username]").value)
  ) {
    $(".modal-register .errormsg").innerText = "用户名已存在";
    return false;
  }
  if (!/^\w{6,10}$/.test($(".modal-register input[name=password]").value)) {
    $(".modal-register .errormsg").innerText =
      "密码需输入6-10个字符，包括字母数字下划线";
    return false;
  }
  if (
    $(".modal-register input[name=password]").value !==
    $(".modal-register input[name=password2]").value
  ) {
    $(".modal-register .errormsg").innerText = "两次输入的密码不一致";
    return false;
  }
  this.submit();
});

