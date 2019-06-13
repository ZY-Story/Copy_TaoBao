window.onload = function(){

    // 我的淘宝   移入移出
    var mytb = document.getElementById('mytb')
    var myTbInfor = document.getElementById('myTbInfor')
    mytb.onmouseover = function(){
       myTbInfor.style.display = 'block'
       myTbInfor.style.border = 1+'px';
       
    }
    mytb.onmouseleave = function(){
        myTbInfor.style.display = 'none'
    }


    // 收藏夹   移入移出
    var coll = document.getElementById('coll')
    var collInfor = document.getElementById('collInfor')
    coll.onmouseover = function(){
        collInfor.style.display = 'block'
    }
     coll.onmouseleave = function(){
         collInfor.style.display = 'none'
    }
}
