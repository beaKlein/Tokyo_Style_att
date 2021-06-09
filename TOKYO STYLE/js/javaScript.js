

function validarLogin() {
	var usuario = document.getElementById("login");
	var senha = document.getElementById("senha");
	var borda = document.getElementsByClassName("inputBox")

	if (usuario.value == "" || senha.value== "") {
		swal('Good job!', 'You clicked the button!', 'success');
	  

	  
	  return;
	}
}
function validarCadastro() {
	
	var nome = document.getElementById("name");
	var email = document.getElementById("email");
	var senha = document.getElementById("senha");
	var endereco = document.getElementById("address");
	var pais = document.getElementById("country");
	var cidade = document.getElementById("city");
	var telefone = document.getElementById("phone");
	var checkbox = document.getElementById("termos");


  
	
	if (nome.value == "") {
	  alert("Please, enter your name.");
  
	  
	  nome.focus();
	  
	  return;
	}
	if (email.value == "") {
	  alert("Please, enter your email.");
	  email.focus();
	  return;
	}
	if (senha.value == "") {
	  alert("Please, enter your password.");
	  senha.focus();
	  return;
	}
	if (endereco.value == "") {
	  alert("Please, enter your address.");
	  endereco.focus();
	  return;
	}
	if (pais.value == "") {
	  alert("Please, enter your country.");
	  estado.focus();
	  return;
	}
	if (cidade.value == "") {
	  alert("Please, enter your city.");
	  cidade.focus();
	  return;
	}
	if (telefone.value == "") {
	  alert("Please, enter your phone.");
	  telefone.focus();
	  return;
	}
		

	
	if(checkbox.checked) {
		alert("Successful registration.");
	}
	else {
		alert("Please accept the terms to complete the registration!");
		return;
	}

}

function processarPagamento() {
	
	var card = document.getElementById("card");
	var nameOfCard = document.getElementById("nameCard");
	var validityCard = document.getElementsByClassName("validity")
	var SecurityCode = document.getElementsByClassName("code")

	if (card.value == "" || nameOfCard.value== "" || validityCard.value == "" || SecurityCode.value== "") {
	  alert("Please enter all payment information.");
	 
	  
	  return;
	}
	else{
		alert("We are processing your purchase, thank you.");	
	}


}
