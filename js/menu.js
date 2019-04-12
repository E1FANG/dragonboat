// 这里是推广的js这里是推广的js这里是推广的js这里是推广的js这里是推广的js这里是推广的js这里是推广的js
// $('#open-menu').addEventListener('click',function(){
//   e.stopPropagation();
//   console.log('123')
//   // if (e.target.classList.contains("index-login")) {
//     $(".movemenu-wrap").style.display = "block";
//   // }
// })
$('#open-menu1').onclick = function (){
    if($(".movemenu-wrap").style.display =="block"){
        $(".movemenu-wrap").style.display = "none"
    }else{
        $(".movemenu-wrap").style.display = "block"
    }
  }
$('.mobe-btn').onclick = function(){
    $(".movemenu-wrap").style.display = "none";
    console.log('1232')
}
$('.mobe-btn1').onclick = function(){
    $(".movemenu-wrap").style.display = "none";
    console.log('1232')
}
$('.mobe-btn2').onclick = function(){
    $(".movemenu-wrap").style.display = "none";
    console.log('1232')
}