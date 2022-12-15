document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

$(document).on("click", "ul li", function () {
  $(this).addClass("n-active").siblings().removeClass("n-active");
});

$(document).onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
