function insert(num){
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}
function apagar(){
    document.getElementById('res').innerHTML = '';
}
function back(){
    var diminuir = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = diminuir.substring(0, diminuir.length -1)
}
function calcular(){
    var resultado = document.getElementById('res').innerHTML;
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado);
    }
}