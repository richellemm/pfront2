document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("entrarAdmin").addEventListener("click", function () {
        
        var objLoginSenha = {
            email: document.getElementById("loginAdmin").value,
            senha: document.getElementById("senhaLogin").value
        };

        console.log("Dados de login:", objLoginSenha);

        if (validarUsuario(objLoginSenha)) {
            window.location.href = "mensagens.html";
        } else {
            document.getElementById("validacaoAdmin").innerHTML = "E-mail e Senha inválidos";
            document.getElementById("validacaoAdmin").style.display = "block";
            
            document.getElementById("loginAdmin").value = '';
            document.getElementById("senhaLogin").value = '';
        }
    });
});