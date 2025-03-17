var elementos = document.querySelectorAll('.Copiar');

        // Adiciona o evento de clique em cada elemento h2
        elementos.forEach(function(elemento) {
            elemento.addEventListener("click", function() {
                // Cria um input temporário
                var texto = document.createElement("input");
                texto.value = this.innerText; // Pega o texto do h2

                // Adiciona o input ao body
                document.body.appendChild(texto);

                // Seleciona o texto do input temporário
                texto.select();
                texto.setSelectionRange(0, 99999); // Para dispositivos móveis

                // Copia o texto para a área de transferência
                document.execCommand("copy");

                // Remove a seleção de texto visível
                window.getSelection().removeAllRanges();

                // Remove o input temporário
                document.body.removeChild(texto);

                // Alerta para confirmar a cópia
                alert("Texto copiado: " + texto.value);
            });
        });