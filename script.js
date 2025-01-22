var whatsappWindow = null; // Variável para armazenar a referência da aba do WhatsApp
var isSending = false; // Flag para controlar se uma mensagem está sendo enviada

function inverterTexto(texto) {
    return texto.split('').reverse().join('');
}

function enviarMensagem() {
    // Evita clicar várias vezes enquanto o processo está em andamento
    if (isSending) return;

    isSending = true; // Ativar flag para bloquear cliques repetidos
    var numeroDe = document.getElementById('numero').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Inverter a mensagem
    var mensagemInvertida = inverterTexto(mensagem);

    // Validar se o número e a mensagem estão preenchidos
    if (numeroDe && mensagemInvertida) {
        // Gerar o link do WhatsApp com a mensagem invertida
        var url = `https://wa.me/${numeroDe}?text=${encodeURIComponent(mensagemInvertida)}`;

        // Se a janela do WhatsApp não foi aberta ou foi fechada, abre a janela
        if (!whatsappWindow || whatsappWindow.closed) {
            whatsappWindow = window.open(url, '_blank');
        } else {
            // Se a janela já estiver aberta, modifica o texto da mensagem
            whatsappWindow.location.href = url;
            whatsappWindow.focus();
        }
    } else {
        alert("Por favor, preencha o número e a mensagem.");
    }

    // Após um breve tempo, desbloqueia o botão para novos cliques
    setTimeout(function() {
        isSending = false;
    }, 2000); // 2 segundos de delay (você pode ajustar conforme necessário)
}


