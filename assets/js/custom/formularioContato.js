document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simulação de envio dos dados do formulário
    console.log("Enviando dados...");
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Assunto:", subject);
    console.log("Mensagem:", message);


    setTimeout(function() {
        alert("Formulário enviado com sucesso! Obrigado pelo Feedback");
    }, 1000);   
});
