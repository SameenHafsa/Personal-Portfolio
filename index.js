function toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("nav-open");
  }
  
  function showContent(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  