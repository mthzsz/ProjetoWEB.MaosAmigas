// formValidator.js
export function initFormValidation() {
  const form = document.getElementById("formCadastro");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      cpf: form.cpf.value.trim(),
      telefone: form.telefone.value.trim(),
      nascimento: form.nascimento.value,
      endereco: form.endereco.value.trim(),
      cep: form.cep.value.trim(),
      cidade: form.cidade.value.trim(),
      estado: form.estado.value.trim()
    };


    const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data.cpf);
    const emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email);

    if (!cpfValido) {
      showFeedback("CPF inválido! Use o formato 000.000.000-00", "error");
      return;
    }
    if (!emailValido) {
      showFeedback("E-mail inválido!", "error");
      return;
    }

    localStorage.setItem("cadastroUsuario", JSON.stringify(data));
    showFeedback("Cadastro realizado com sucesso!", "success");
    form.reset();
  });

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = type;
    feedback.style.display = "block";
    setTimeout(() => feedback.style.display = "none", 4000);
  }
}
