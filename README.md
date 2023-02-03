
# 🚧⛔ Descrição Geral (v_alfa-01.03)

    O código define as seguintes variáveis:

    ✔️ convertButton é uma referência ao elemento HTML com o ID "convert", que é o botão que será clicado para iniciar a conversão.
    ✔️ timeInput é uma referência ao elemento HTML com o ID "time", que é o input onde o usuário digitará o tempo a ser convertido.
    ✔️ precisionRadios é uma referência a todos os elementos HTML com o atributo "name" igual a "precision", que são os botões de rádio que determinam a precisão de casas decimais na conversão.
    ✔️ output é uma referência ao elemento HTML com o ID "output", que é o local onde o resultado da conversão será exibido.

    O código define as seguintes métodos:

    ✔️ Seleção de elementos HTML: Usa o método querySelector ou querySelectorAll do objeto document para selecionar elementos HTML específicos na página. Por exemplo, const convertButton = document.querySelector("#convert") seleciona o botão com o ID "convert".

    ✔️ Adição de Event Listener: Usa o método addEventListener do objeto DOM para adicionar um event listener a um elemento HTML. Por exemplo, convertButton.addEventListener("click", function () { convertTime(timeInput); }); adiciona um event listener ao botão "convert" para que a função convertTime seja chamada quando o botão é clicado.

    ✔️ Obtenção de valores de input: Usa o método value do objeto HTMLInputElement para obter o valor digitado pelo usuário em um input. Por exemplo, const time = timeInput.value; obtém o valor digitado pelo usuário no input "time".

    ✔️ Manipulação de strings: Usa métodos como split e parseInt para separar e converter strings em números. Por exemplo, const [minutes, seconds] = time.split(":").map(Number); separa a string em minutos e segundos e os converte em números usando o método map.

    ✔️ Cálculo matemático: Usa operações matemáticas básicas para realizar cálculos. Por exemplo, const hours = (minutes / 60) + (seconds / 3600); calcula as horas a partir dos minutos e segundos.

    ✔️ Formatação de output: Usa métodos como toFixed para formatar o output para o número de casas decimais especificado. Por exemplo, const result = hours.toFixed(precision) + " horas"; formata o resultado em horas com o número de casas decimais especificado.

    ✔️ Exibição de output: Usa a propriedade innerHTML do objeto DOMElement para exibir o resultado na página. Por exemplo, output.innerHTML = result; exibe o resultado da conversão na página.

>   #### 👉  Resultado (Imagem)
>    ![image](https://user-images.githubusercontent.com/93455937/216657928-322b62b4-fb9a-4c42-9a7c-c06e9dfcd5e4.png)


> ---
>#### ***✍️ código principal JS(v_alfa-01.03)***
>``` JS
>  const convertButton = document.querySelector("#convert");
>  const timeInput = document.querySelector("#time");
>  const precisionRadios = document.querySelectorAll('input[name="precision"]');
>  const output = document.querySelector("#output");
>
>  Inputmask("99:99").mask(timeInput);
>
>  function convertTime(timeInput) {
>    const time = timeInput.value.split(":");
>    const minutes = parseInt(time[0]);
>    const seconds = parseInt(time[1]);
>    const totalSeconds = minutes * 60 + seconds;
>
>    let precision = 0;
>    for (let i = 0; i < precisionRadios.length; i++) {
>      if (precisionRadios[i].checked) {
>        precision = parseInt(precisionRadios[i].value);
>        break;
>      }
>    }
>
>    const hours = Math.floor(totalSeconds / 3600);
>    const remainingSeconds = totalSeconds % 3600;
>    const remainingMinutes = Math.floor(remainingSeconds / 60);
>    const remainingSecondsAfterMinutes = Math.round(remainingSeconds % 60);
>
>    let result = "";
>    if (hours > 0) {
>      result += `${hours} hora${hours > 1 ? "s" : ""}`;
>    }
>    if (remainingMinutes > 0) {
>      result += ` ${remainingMinutes} minuto${remainingMinutes > 1 ? "s" : ""}`;
>    }
>    if (remainingSecondsAfterMinutes > 0) {
>      result += ` ${remainingSecondsAfterMinutes} segundo${remainingSecondsAfterMinutes > 1 ? "s" : ""}`;
>    }
>
>    output.textContent = result;
>  }
>
>  convertButton.addEventListener("click", function () {
>    convertTime(timeInput);
>  });
>
>```
>
> ---
>#### ***✍️ código principal HTML(v_alfa-01.03)***
> ``` HTML
>
> <!DOCTYPE html>
> <html lang="pt-br">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Document</title>
>     <link rel="stylesheet" href="ASSETS/CSS/leiaute.css">
> </head>
> <body>
>     <h1>Convert Horas e mminutos</h1>
>
>     <form>
>         <label for="time">Tempo (mm:ss):</label>
>         <input type="text" id="time" name="time">
>         <br><br>
>         <label for="precision">Precisão:</label>
>         <br>
>         <input type="radio" id="precision-0" name="precision" value="0">
>         <label for="precision-0">0 casas decimais</label>
>         <br>
>         <input type="radio" id="precision-1" name="precision" value="1">
>         <label for="precision-1">1 casa decimal</label>
>         <br>
>         <input type="radio" id="precision-2" name="precision" value="2">
>         <label for="precision-2">2 casas decimais</label>
>         <br><br>
>         <button type="button" id="convert">Converter</button>
>   </form>
>
>   <p id="output">O resultado será exibido aqui.</p>
>
> </body>
> <script src="LIBS/0-JQUERY/jquery-3.5.1.min.js"></script>
> <script src="LIBS/0-JQUERY/jquery.inputmask.min.js"></script>
> <script src="ASSETS/JS/script.js"></script>
>
> </html>
>
> > ```


>#### ***✍️ código principal SCSS(v_alfa-01.03)***
> ``` SCSS
> form {
>     display: flex;
>     flex-direction: column;
>     align-items: center;
> }
>
> ```
>



> ### **❓ Converte minutos e segundos em horas, usando html scss e javascript.**
> #### **Descrição**
>
>     De forma simples, convert minutos e segundos e hotas
>     Neste exemplo, você precisa adicionar a biblioteca Inputmask ao seu projeto.
>     Depois de adicioná-lo, você pode usar a função Inputmask("99:99").mask(timeInput) para adicionar uma máscara ao input com o ID "time".
>     A máscara "99:99" permite que o usuário insira dois dígitos para minutos e dois dígitos para segundos. O resto do código;
>     convertendo o tempo em horas e exibindo o resultado na tag <p> com o ID "output".
>
>
>
> ---
>#### ***✍️Exemplo de código HTML***
> ``` HTML
>     <form>
>         <label for="time">Tempo (mm:ss):</label>
>         <input type="text" id="time" name="time">
>         <br><br>
>         <button type="button" id="convert">Converter</button>
>     </form>
>
>     <p id="output">O resultado será exibido aqui.</p>
> ```
>
>
> ---
>#### ***✍️Exemplo de código SCSS***
> ``` SCSS
> form {
>     display: flex;
>     flex-direction: column;
>     align-items: center;
> }
>
> ```
>
>
> ---
>#### ***✍️Exemplo de código JS***
> ``` JS
> const convertButton = document.querySelector("#convert");
> const timeInput = document.querySelector("#time");
> const output = document.querySelector("#output");
>
> Inputmask("99:99").mask(timeInput);
>
> convertButton.addEventListener("click", function() {
>   const time = timeInput.value.split(":");
>   const minutes = parseInt(time[0]);
>   const seconds = parseInt(time[1]);
>   const totalSeconds = minutes * 60 + seconds;
>   const hours = totalSeconds / 3600;
>   output.textContent = `${hours.toFixed(2)} horas`;
> });
>
>
> ```
>
---
> ### **🏁❗ 01.02 implementa através de  "radio button" até  três opções quanto a precisão de casas decimais.**
> #### **Descrição**
>
>     Neste exemplo, você adiciona três radio buttons com opções de precisão de 0 a 2 casas decimais. O usuário pode escolher a precisão desejada antes de clicar no botão "Converter". Quando o usuário clica no botão "Converter", o script JavaScript é executado, convertendo o tempo em horas e exibindo o resultado na tag <p> com o ID "output" usando a precisão escolhida pelo usuário.
>
> ---
>#### ***✍️Exemplo de código HTML***
> ``` HTML
>     <h1>Convert Horas e mminutos</h1>
>
>     <form>
>         <label for="time">Tempo (mm:ss):</label>
>         <input type="text" id="time" name="time">
>         <br><br>
>         <label for="precision">Precisão:</label>
>         <br>
>         <input type="radio" id="precision-0" name="precision" value="0">
>         <label for="precision-0">0 casas decimais</label>
>         <br>
>         <input type="radio" id="precision-1" name="precision" value="1">
>         <label for="precision-1">1 casa decimal</label>
>         <br>
>         <input type="radio" id="precision-2" name="precision" value="2">
>         <label for="precision-2">2 casas decimais</label>
>         <br><br>
>         <button type="button" id="convert">Converter</button>
>   </form>
> ```
>
>#### ***✍️Exemplo de código JS***
> ``` JS
> const convertButton = document.querySelector("#convert");
> const timeInput = document.querySelector("#time");
> const precisionRadios = document.querySelectorAll('input[name="precision"]');
> const output = document.querySelector("#output");
>
> Inputmask("99:99").mask(timeInput);
>
> convertButton.addEventListener("click", function() {
>   const time = timeInput.value.split(":");
>   const minutes = parseInt(time[0]);
>   const seconds = parseInt(time[1]);
>   const totalSeconds = minutes * 60 + seconds;
>   const hours = totalSeconds / 3600;
>
>   let precision = 0;
>   for (let i = 0; i < precisionRadios.length; i++) {
>     if (precisionRadios[i].checked) {
>       precision = parseInt(precisionRadios[i].value);
>       break;
>     }
>   }
>   output.textContent = `${hours.toFixed(precision)} horas`;
> });
>
> ```
---
> ### **🏁❗ 01.03 function convertTime(timeInput)**
> #### **Descrição**
>
>      Neste exemplo, a lógica de conversão foi movida para uma função chamada convertTime(). Esta função é chamada quando o botão com o ID "convert" é clicado, graças ao event listener adicionado na última linha do código.
>      Além dissso, a variável "timeInput" é passada como parâmetro para a função "convertTime" quando ela é chamada a partir do event listener no botão "convert".
>
>#### ***✍️Exemplo de código JS***
> ``` JS
> const convertButton = document.querySelector("#convert");
> const timeInput = document.querySelector("#time");
> const precisionRadios = document.querySelectorAll('input[name="precision"]');
> const output = document.querySelector("#output");
>
> Inputmask("99:99").mask(timeInput);
>
> function convertTime(timeInput) {
>   const time = timeInput.value.split(":");
>   const minutes = parseInt(time[0]);
>   const seconds = parseInt(time[1]);
>   const totalSeconds = minutes * 60 + seconds;
>
>   let precision = 0;
>   for (let i = 0; i < precisionRadios.length; i++) {
>     if (precisionRadios[i].checked) {
>       precision = parseInt(precisionRadios[i].value);
>       break;
>     }
>   }
>
>   const hours = Math.floor(totalSeconds / 3600);
>   const remainingSeconds = totalSeconds % 3600;
>   const remainingMinutes = Math.floor(remainingSeconds / 60);
>   const remainingSecondsAfterMinutes = Math.round(remainingSeconds % 60);
>
>   let result = "";
>   if (hours > 0) {
>     result += `${hours} hora${hours > 1 ? "s" : ""}`;
>   }
>   if (remainingMinutes > 0) {
>     result += ` ${remainingMinutes} minuto${remainingMinutes > 1 ? "s" : ""}`;
>   }
>   if (remainingSecondsAfterMinutes > 0) {
>     result += ` ${remainingSecondsAfterMinutes} segundo${remainingSecondsAfterMinutes > 1 ? "s" : ""}`;
>   }
>
>   output.textContent = result;
> }
>
> convertButton.addEventListener("click", function () {
>   convertTime(timeInput);
> });
>
>
>   output.textContent = result;
> });
>
```
>