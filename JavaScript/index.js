window.onload = function(){
    var headerIndex = document.getElementsByClassName('headerIndex')
    console.log(headerIndex)
    headerIndex.onmouseover  = function(){
        alert(123)
    }
}