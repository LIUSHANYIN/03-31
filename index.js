let isClick =true;
function showNav(){
    if(isClick){
        isClick =false;
        document.getElementById('navbar').classList.remove('cover');
        document.getElementById('navbar').classList.add('show');
        document.getElementById('bt1').classList.add('btcolor');
    }
    else{
        isClick =true;

        document.getElementById('navbar').classList.remove('show');
        document.getElementById('navbar').classList.add('cover');
        document.getElementById('bt1').classList.remove('btcolor');
    }
}


    // function handleShow(){
    //     if(window.scrollY>100){
    //         document.getElementById('bar').classList.add('background');
    //         document.getElementById('a1').style.color='black';
    //         document.getElementById('a2').style.color='black';
    //         document.getElementById('a3').style.color='black';
    //         document.getElementById('a4').style.color='black';
    //         document.getElementById('a5').style.color='black';
    //     }
    //     else{
    //         document.getElementById('bar').classList.remove('background');
    //         document.getElementById('a1').style.color="#fafafa54";
    //         document.getElementById('a2').style.color="#fafafa54";
    //         document.getElementById('a3').style.color="#fafafa54";
    //         document.getElementById('a4').style.color="#fafafa54";
    //         document.getElementById('a5').style.color="#fafafa54";
    //     }
    // }

    var width = document.body.clientWidth;
    var isWide;
    console.log(width);
  
    if(width>768){
        window.onscroll =function(){
            if(window.scrollY>100){
                document.getElementById('bar').classList.add('background');
                document.getElementById('a1').style.color='black';
                document.getElementById('a2').style.color='black';
                document.getElementById('a3').style.color='black';
                document.getElementById('a4').style.color='black';
                document.getElementById('a5').style.color='black';
            }
            else{
                document.getElementById('bar').classList.remove('background');
                document.getElementById('a1').style.color="#fafafa54";
                document.getElementById('a2').style.color="#fafafa54";
                document.getElementById('a3').style.color="#fafafa54";
                document.getElementById('a4').style.color="#fafafa54";
                document.getElementById('a5').style.color="#fafafa54";
            }
        }
    }
    



