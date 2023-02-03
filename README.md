
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

>#### ***✍️Exemplo de código SCSS***
``` SCSS
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

```
>

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