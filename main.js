window.onload = () => {
 function update(n) {
  if(n){
   document.querySelector('.selected').innerHTML = document.querySelector('.selected').innerHTML
                                                   .substring(10,document.querySelector('.selected').innerHTML.length - 10);
   document.querySelector('.selected').style.textDecoration = 'none';
   document.querySelector('.selected').classList.remove('selected');
   n.classList.add('selected');
  }
  document.querySelector('.selected').innerHTML = '&lt;&nbsp;' + document.querySelector('.selected').innerHTML + '&nbsp;&gt;';
  document.querySelector('.selected').style.textDecoration = 'underline';
 }
 update();
 window.onkeydown = e => {
  if(e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 9){
   e.preventDefault();
   const n = e.keyCode === 38 ? document.querySelector('.selected').previousElementSibling : document.querySelector('.selected')
                                                                  .nextElementSibling;
   if(n !== null){update(n);}
  }
  else if(e.keyCode === 13){
   document.querySelector('#frame').src = document.querySelector('.selected').children[0].innerHTML
   document.querySelector('#frame').style.zIndex = 3;
   document.querySelector('.selected').style.zIndex = 1;
  }
 };
};