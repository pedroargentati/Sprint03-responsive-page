const buttonMobile = document.getElementById("button-responsive");

function activatedMenu() {
    const navigation = document.getElementById("nav");
    navigation.classList.toggle("active");
}

buttonMobile.addEventListener('click', activatedMenu);
buttonMobile.addEventListener('touchstart', activatedMenu);

/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); 
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); 
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('phone').onkeyup = function(){
		mascara( this, mtel );
	}
}