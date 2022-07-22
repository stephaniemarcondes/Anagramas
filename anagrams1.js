function getAnagramsOf(input) {
  const result = alphabetize(input);

  let finalResult = [];

  for (let i = 0; i < palavras.length; i++) {
    let anagrama = alphabetize(palavras[i]);

    if (anagrama == result) {
      finalResult.push(palavras[i]);
    }
    
  }

  let p = (document.createElement("p").innerHTML = finalResult
    .toString()
    .replaceAll(",", " ")); 
  document.getElementById("resultado").append(p);
  
}



const button = document.getElementById("findButton");
button.addEventListener("click", function () {});

button.addEventListener("click", function () {
  let resultado = document.getElementById("resultado")
  resultado.innerText = ""
  let typedText = document.getElementById("input").value;
  getAnagramsOf(typedText);

  
});

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}
