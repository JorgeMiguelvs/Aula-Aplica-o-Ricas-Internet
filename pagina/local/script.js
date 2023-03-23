

let vcorfundo, vcorfonte, vnome;

function defineCor(op, cor) {
    if (op == 1) {
        document.body.style.backgroundColor = cor;
        vcorfundo = cor;
        //alert(vcorfundo);
    }
    else {
        document.body.style.color = cor;
        vcorfonte = cor;
        //alert(vcorfonte);
    }

}

function gravar() {

    var form = document.getElementById("fconf");
    vnome = document.getElementById('fnome').value;
    localStorage.corFundo = vcorfundo;
    localStorage.corTexto = vcorfonte;
    localStorage.nome = vnome;
    form.style.display="none";


}

function mostrar()
{
    var form = document.getElementById("fconf");
    form.style.display = "block";
}

function inicia (){ 
        if(localStorage.nome)
        {
            vcorfonte = localStorage.corfundo;
            vcortexto = localStorage.cortexto;
            vnome = localStorage.nome;

            defineCor(1,vcorfonte);
            defineCor(1, vcorfundo);
            document.getElementById("painel").innerHTML="Willtcome " + vnome +"<hr>";

        }

       

}

window.addEventListener("load",inicia);

