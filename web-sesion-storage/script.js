//criar uma variavel e armazenar um valor
var registro = window.prompt("Digite seu nome:");
//chmamar o localstorage, ela vem do window(no caso vamos usar o setItem) 
//funciona sem o window também
window.localStorage.setItem("Nome",registro);

//para recuperar o valor armazenado em uma key do localstorage, usamos o getItem

//alert(localStorage.getItem("Nome"));

//se o invés de apresentar a key em uma janela alert, quiser apresenatr na pagina, podemos usar o document.write
//document.write ("o seu nome é:"+registro);

//exe1 crie variaveis para endereço,cpf,n de dependentes

var endereco = window.prompt("Digite o nome da sua rua e n°:");
window.localStorage.setItem("Endereço",endereco);

var cpf = window.prompt("Digite seu cpf");
window.localStorage.setItem("CPF",cpf);

var dependente = window.prompt("N° de dependentes:");
window.localStorage.setItem("N° de Dependentes",dependente);

alert(localStorage.getItem("Nome"));
alert(localStorage.getItem("Endereço"));
alert(localStorage.getItem("CPF"));
alert(localStorage.getItem("N° de Dependentes"));
