function whatsapp() {
    alert("Ainda não tenho um link direto para o meu numero de whatsapp, mas se quiser entrar em contato, esse é o meu numero: (33) 99934-763 ou me chame no LINKEDIN");
}

// // Button: remove text
// function removeText() {
//     document.getElementById("text, text2").innerHTML = "";
//     // add a new text
//     document.getElementById("text").innerHTML = "Olá, meu nome é <b>Rafael</b> e eu sou um <b>desenvolvedor</b> de software. <br> <br> <b>Meu objetivo</b> é desenvolver softwares que possam ajudar a <b>melhorar a vida das pessoas</b>.";
    
// }
// Button: translate text
function translateText() {
    document.getElementById("text01").innerHTML = "BE WELCOME";
    document.getElementById("text02").innerHTML = "I'm 24 years old, I study Web Programming, I'm passionate about technology and online tools. Looking for new challenges and looking for a career in the market web.";
    document.getElementById("text03").innerHTML = "Hello, I'm <u>Henrique</u> <br /> and this is mine";
    document.getElementById("text04").innerHTML = "PROJECTS";
    document.getElementById("text05").innerHTML = "MY SKILLS";
    document.getElementById("text06").innerHTML = "PROJECTS";
}
// restaurar tradução
function restoreTranslate() {
    document.getElementById("text01").innerHTML = "Seja Bem Vindo";
    document.getElementById("text02").innerHTML = "Eu tenho 24 anos, estudo programação web, sou apaixonado por tecnologia e ferramentas online. Busco novos desafios e busco uma carreira no mercado web.";
    document.getElementById("text03").innerHTML = "Olá, eu sou <u>Henrique</u> <br /> e isso é meu";
    document.getElementById("text04").innerHTML = "PROJETOS";
    document.getElementById("text05").innerHTML = "SKILLS";
    document.getElementById("text06").innerHTML = "PROJETOS";
}
// fazer imagem vibrar
function vibrate() {
    document.getElementById("img").style.animation = "treme 0.1s infinite";
}
// fazer imagem parar de vibrar
function stopVibrate() {
    document.getElementById("img").style.animation = "";
}
// fazer font mudar de cor
function changeFont() {
    document.querySelector(".header #text01").style.color = "blue";

    document.querySelector(".container .text02").style.color = "blue";

    // selecionar class button e id text04 e mudar a cor
    document.querySelector(".button button").style.background = "blue";
    // document.getElementById("text04").style.color = "blue";
}
// restaurar font
function restoreFont() {
    document.querySelector(".header #text01").style.color = "red";

    document.querySelector(".container .text02").style.color = "red";

    // selecionar class button e id text04 e mudar a cor
    document.querySelector(".button button").style.background = "red";
    // document.getElementById("text04").style.color = "black";
}
// restaurar pagina ao clicar no botão
function restorePage() {
    location.reload();
}



