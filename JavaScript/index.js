// window.onload = function(){
//     // var headerIndex = document.getElementsByClassName('headerIndex')
//     // var right = document.getElementByClassName('right')
//     // console.log(this.right)
//     alert(0)
// }
// (function(){
//     var headerIndex = document.getElementsByClassName('headerIndex')
//     var right = document.getElementByClassName('right')
//     console.log(right)
//     console.log(headerIndex)
//     alert(123)
// })



// 淘宝网首页
function getIndex(){
    var tbIndex = document.getElementById('tbIndex')
    console.log(tbIndex.innerHTML)     
}
// 我的淘宝
function getMyTb(){
    var tbOther = document.getElementById('tbOther')
    tbOther.style.display ='block'
}
function leaveMyTb(){
    var tbOther = document.getElementById('tbOther')
    tbOther.style.display ='none'
}