const buttonMobile = document.getElementById("button-responsive");

function activatedMenu() {
    const navigation = document.getElementById("nav");
    navigation.classList.toggle("active");
}

buttonMobile.addEventListener('click', activatedMenu);
buttonMobile.addEventListener('touchstart', activatedMenu);