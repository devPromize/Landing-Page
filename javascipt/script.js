function showsidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hidesidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none' 
};


/*function makeActive(element){
  var hideOnmobile =  document.querySelectorAll('.hide-onmobile');
  hideOnmobile.forEach(function(hideOnmobile){
    hideOnmobile.classList.remove('active');
  });
   element.classList.add("active");
  
}*/

/*let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = ()=> {
  section.forEach(sec=>{
    let top = window.scrollY;
    let offset =  sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id =sec.getAttribute('id');
    if(top > offset && top < offset + height){
        navLink.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*='+id+']').classList.add('active');

        });
      };
  });
};*/