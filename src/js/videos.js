if(document.getElementById("scrollToTopContainer") != undefined && 
  document.getElementById("scrollToTopButton") != undefined) {

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  document.getElementById("scrollToTopButton").onclick = scrollToTop;

  function scrollHandler() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("scrollToTopContainer").style.display = "block";
    } else {
      document.getElementById("scrollToTopContainer").style.display = "none";
    }
  }

  window.onscroll = scrollHandler;

  if(document.body.scrollTop <= 50 || document.documentElement.scrollTop <= 50) {
    document.getElementById("scrollToTopContainer").style.display = "none";
  }
}
