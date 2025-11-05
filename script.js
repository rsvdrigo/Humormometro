var btn = document.getElementById('btnShow');
var selectCase = document.getElementById('container__select');
var message = document.getElementById('message');
var happyPhrases = ['Que maravilha! Continue espalhando essa energia positiva pelo mundo.', 'A felicidade é contagiante! Que seu dia continue brilhando.', 'Continue aproveitando esse sentimento! Você merece.'];
var neutralPhrases = ['Um dia neutro é uma tela em branco. Pinte-o com boas escolhas!', 'Tudo bem sentir-se neutro. Aproveite a calma e recarregue as energias.', 'A neutralidade é um ponto de equilíbrio. Que o resto do seu dia penda para o lado positivo!'];
var stressedPhrases = ['Respire fundo. Nenhuma tempestade dura para sempre. Você consegue.', 'Faça uma pausa de 5 minutos. O mundo pode esperar. Cuide-se.', 'Lembre-se: você é mais forte do que aquilo que está te estressando.'];
var sadPhrases = ['Seja gentil consigo mesmo. Sentimentos são visitantes, deixe-os ir e vir. Dias melhores virão.', 'Está tudo bem não estar bem. Permita-se sentir, mas lembre-se que isso vai passar.', 'Depois da chuva, o sol sempre volta. Estamos torcendo por você!'];
function randomPhrasesSelection(phrasesList) {
    var biaNTomaBanho = Math.floor(Math.random() * phrasesList.length);
    return phrasesList[biaNTomaBanho];
}
btn.addEventListener("click", function () {
    var valor = selectCase.value;
    if (valor === "feliz") {
        message.textContent = randomPhrasesSelection(happyPhrases);
        document.body.style.backgroundImage = 'linear-gradient(135deg, #b6eecd 20%, #38a169 80%)';
    }
    else if (valor === "neutro") {
        message.textContent = randomPhrasesSelection(neutralPhrases);
        document.body.style.backgroundImage = 'linear-gradient(135deg, #e9e3ceff 20%, #d69e2e 80%)';
    }
    else if (valor === "estressado") {
        message.textContent = randomPhrasesSelection(stressedPhrases);
        document.body.style.backgroundImage = 'linear-gradient(135deg, #cf8888ff 20%, #a13737ff 80%)';
    }
    else if (valor === "triste") {
        message.textContent = randomPhrasesSelection(sadPhrases);
        document.body.style.backgroundImage = 'linear-gradient(135deg, #accae2ff 20%, #3182ce 80%)';
    }
    else {
        message.textContent = 'Selecione seu humor hoje!';
    }
});
