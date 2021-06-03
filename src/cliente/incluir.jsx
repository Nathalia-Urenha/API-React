import React from "react";
import { Link } from "react-router-dom";
import { createCliente } from "../service/ClienteService";
import { validarCliente } from "../validacao/ValidCliente";

class IncluirCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
  }

  initState = () => ({
    id: undefined,
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    cpf: "",

    toReturn: false,

    formValidation: {
      nome: [],
      email: [],
      senha: [],
      telefone: [],
      cpf: [],

      validNome: false,
      validEmail: false,
      validSenha: false,
      validTelefone: false,
      validCpf: false,
    },
  });

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validarDigitacaoCliente() {
    const { toReturn, formValidation } = this.state;
    let state = validarCliente(this.state);
    this.setState({
      toReturn: state.toReturn,
      formValidation: state.formValidation,
    });
    return state.toReturn;
  }

  async handleSubimitCliente(e) {
    e.preventDefault();

    if (this.validarDigitacaoCliente() == false) {
      const { nome, email, senha, telefone, cpf } = this.state;

      let cliente = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        cpf: cpf,
      };

      const resposta_servidor = await createCliente(cliente);
      console.log(resposta_servidor);

      this.setState(
        {
          state: this.initState(),
        },
        this.listarCliente()
      );
    }
  }

  listarCliente = () => {
    this.props.history.push("/cliente/listar");
  };

  render() {
    const { nome, email, senha, telefone, cpf, formValidation } = this.state;

    return (
      <div className="container pt-5">
        <div className="tile">
          <div className="tile-body">
            <form onSubmit={(e) => this.handleSubimitCliente(e)}>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="nome" className="control-label">
                      Nome:
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={nome}
                      onChange={(e) => this.onChange(e)}
                      id="nome"
                      className={
                        formValidation.validNome == true
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />

                    {formValidation.validNome && (
                      <div className="invalid-feedback">
                        {formValidation.nome.map((erro, index) => {
                          return (
                            <p key={index} style={{ margin: "0" }}>
                              <span>{erro}</span>
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="email" className="control-label">
                      E-mail
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => this.onChange(e)}
                      className={
                        formValidation.validEmail == true
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />

                    {formValidation.validEmail && (
                      <div className="invalid-feedback">
                        {formValidation.email.map((erro, index) => {
                          return (
                            <p key={index} style={{ margin: "0" }}>
                              <span>{erro}</span>
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="senha" className="control-label">
                      Senha
                    </label>
                    <input
                      type="text"
                      name="senha"
                      id="senha"
                      value={senha}
                      onChange={(e) => this.onChange(e)}
                      className={
                        formValidation.validSenha == true
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />

                    {formValidation.validSenha && (
                      <div className="invalid-feedback">
                        {formValidation.senha.map((erro, index) => {
                          return (
                            <p key={index} style={{ margin: "0" }}>
                              <span>{erro}</span>
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 ">
                  <div className="form-group">
                    <label htmlFor="telefone" className="control-label">
                      Telefone
                    </label>
                    <input
                      type="text"
                      name="telefone"
                      id="telefone"
                      value={telefone}
                      onChange={(e) => this.onChange(e)}
                      className={
                        formValidation.validTelefone == true
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />

                    {formValidation.validTelefone && (
                      <div className="invalid-feedback">
                        {formValidation.telefone.map((erro, index) => {
                          return (
                            <p key={index} style={{ margin: "0" }}>
                              <span>{erro}</span>
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="cpf" className="control-label">
                      CPF
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      id="cpf"
                      value={cpf}
                      onChange={(e) => this.onChange(e)}
                      className={
                        formValidation.validCpf == true
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />

                    {formValidation.validCpf && (
                      <div className="invalid-feedback">
                        {formValidation.cpf.map((erro, index) => {
                          return (
                            <p key={index} style={{ margin: "0" }}>
                              <span>{erro}</span>
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="center col-md-6 col-lg-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    title="Incluir novo Registro"
                  >
                    Salvar Dados do Cliente
                  </button>
                  <Link
                    to="/cliente/listar"
                    className="btn btn-secondary btn-lg ml-3"
                    title="Cancelar a Inclusão"
                  >
                    Cancelar Inclusão do Cliente
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default IncluirCliente;
