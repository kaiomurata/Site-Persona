function Copiar() {
    let email = document.getElementById(email).textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert("E-mail copiado!");
    }).catch(err => {
        console.error("Erro ao copiar:", err);
    });
}
