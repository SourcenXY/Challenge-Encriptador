let buttonEncrypt = document.getElementById('buttonEncrypt');
let buttonDecrypt = document.getElementById('buttonDecrypt');
let buttonCopy = document.getElementById('buttonCopy');
let inputText = document.getElementById('boxText');
let result = document.getElementById('result');
let container = document.querySelector('.containerParagraph');
let e;

buttonEncrypt.addEventListener('click', () => {
    hideText();
    result.textContent = encrypt(save());
})

buttonDecrypt.addEventListener('click', () => {
    hideText();
    result.textContent = decrypt(save());
})

buttonCopy.addEventListener('click', () => {
    let content = result.textContent;
    navigator.clipboard.writeText(content);
})

function save() {
    return inputText.value;
}
function clean() {
    return inputText.value = '';
}

function resultText() {
    hideText();
    return;
}

function hideText() {
    container.classList.add('hide');
    return;
}

function encrypt(message) {
    let text = message;
    let finalText = "";

    for(let i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "ai"
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter"
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes"
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober"
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat"
        }
        else{
            finalText = finalText + text[i]
        }
    }
    return finalText;
}

function decrypt(message) {
    let text = message;
    let finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "a"
            i = i + 1;
        }
        else if(text[i] == "e"){
            finalText = finalText + "e"
            i = i + 4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i"
            i = i + 3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o"
            i = i + 3;
        }
        
        else if(text[i] == "u"){
            finalText = finalText + "u"
            i = i + 3;
        }
        else{
            finalText = finalText + text[i];
        }
        
    }

    return finalText;
}