$( document ).ready(function() {  
    var trs = $("#body").children()
    for(var x=0; x<trs.length; x++){
        
        var childNodes = $(trs[x]).children("th")[0].childNodes 
        var hora = childNodes[0].data 
        hora = $.trim(hora) 
        var lista = localStorage.getItem(hora)
        if(lista){
            var arr = lista.split(",") 
            var ul = $(trs[x]).children("th").children("ul") 
            
            for(var y=0; y<arr.length; y++){ 
                ul.append(`<li> ${arr[y]} </li>`)
            }
        }
        checkAll()
    }
    
});
function checkAll(){
    setInterval(() => {
    var trs = $("#body").children()
    for(var x=0; x<trs.length; x++){
        
        var th = $(trs[x]).children("th") 
        var hora = th[0].childNodes[0].data 
        hora = $.trim(hora)
        const date = new Date()
        const horaArr = hora.split(":")
        if(parseInt(date.getHours()) === parseInt(horaArr[0])){
            if(parseInt(date.getMinutes()) === parseInt(horaArr[1])){
                th.css("background","red")
            }else if( parseInt(date.getMinutes() < parseInt(horaArr[1]) )){
                th.css("background","green")
            }else{
                th.css("background","gray")
            }
        }else if(parseInt(date.getHours()) < parseInt(horaArr[0])){
            th.css("background","green")
        }else{
            th.css("background","gray")
        }
        
    }
}, 1000)
}
$("button").click(function(e){
    var parent = $(this.parentNode) 
    var hora = parent[0].childNodes[0].data 
    hora = $.trim(hora) 
    var ul = parent.children("ul")
    var input = parent.children("input")
    var value = input[0].value 
    var evento = localStorage.getItem(hora)
     if(!evento){  
        evento = value
    }else{
        evento = evento + "," + value 
    }
    localStorage.setItem(hora, evento)   
    ul.append(`<li> ${value} </li>`)
})

const time = document.getElementById('time');
const date = document.getElementById('date');

const meses = ["Enero", "Febrero", "Marzo", 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];

const interval = setInterval( () => {

   const hoy = new Date()

   dia = hoy.getDate();
   mes = hoy.getMonth() + 1;
   year = hoy.getFullYear();
   hora = hoy.getHours();
   minutos = hoy.getMinutes();

  
   date.innerHTML = dia + " / " + mes  + " / " + year + "  " + hora + " : " + minutos ; 

}, 1000 )
