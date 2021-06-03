export const validarCliente = (state) => {
  let { nome, email, senha, telefone, cpf, toReturn, formValidation } = state;

  if (nome.trim().length > 100) {
    formValidation.nome.push(
      "O nome do cliente não pode possuir mais de 100 caracteres!"
    );
    formValidation.validNome = true;
    toReturn = true;
  }

  if (nome.trim().length == 0) {
    formValidation.nome.push("O nome do cliente deve ser informado!");
    formValidation.validNome = true;
    toReturn = true;
  }

  if (email.trim().length > 100) {
    formValidation.email.push(
      "O e-mail do cliente não pode possuir mais de 100 caracteres!"
    );
    formValidation.validEmail = true;
    toReturn = true;
  }

  if (email.trim().length == 0) {
    formValidation.email.push("O e-mail do cliente deve ser informado!");
    formValidation.validEmail = true;
    toReturn = true;
  }

  if (senha.trim().length < 6) {
    formValidation.senha.push(
      "A senha do cliente deve possuir no mínimo 6 caracteres!"
    );
    formValidation.validSenha = true;
    toReturn = true;
  }

  if (senha.trim().length == 0) {
    formValidation.senha.push("A senha do cliente deve ser informada!");
    formValidation.validSenha = true;
    toReturn = true;
  }

  if (telefone.trim().length == 0) {
    formValidation.telefone.push("O telefone cliente deve ser informado!");
    formValidation.validTelefone = true;
    toReturn = true;
  }

  if (cpf.trim().length > 15) {
    formValidation.cpf.push("Número de CPF grande demais");
    formValidation.validCpf = true;
    toReturn = true;
  }

  if (cpf.trim().length == 0) {
    formValidation.cpf.push("O CPF cliente deve ser informado!");
    formValidation.validCpf = true;
    toReturn = true;
  }

  state = { toReturn, formValidation };

  return state;
};
