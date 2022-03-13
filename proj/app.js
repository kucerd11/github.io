let el=document.querySelectorAll('.el')
function myFunction(){
    var inp=document.getElementById("inp").value;
    inp=inp.toLowerCase()
    if(inp!==''){
        for(let i=0;i<el.length;++i){
            if(el[i].textContent.toLocaleLowerCase().includes(inp)){
                el[i].style='order: -1;'
            }else{
                el[i].style='order: 6;'
            }
        }
    }
}
setInterval(myFunction,500,)

function calc(n){
    return function(){
        console.log(1000*n)
    }
}
calc(2)()