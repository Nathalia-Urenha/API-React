import React from "react";
import { Link } from "react-router-dom";
import { findClienteById, updateCliente } from "../service/ClienteService";

class AlterarCliente extends React.Component {
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
  });

  componentDidMount() {
    const { id } = this.props.match.params;
    this.loadData(id);
  }

  async loadData(id) {
    const resposta_servidor = await findClienteById(id);
    console.log(resposta_servidor.registro);
    this.setState({
      id: resposta_servidor.registro.id,
      nome: resposta_servidor.registro.nome,
      email: resposta_servidor.registro.email,
      senha: resposta_servidor.registro.senha,
      telefone: resposta_servidor.registro.telefone,
      cpf: resposta_servidor.registro.cpf,
    });
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  async handleSubimitCliente(e) {
    e.preventDefault();

    const { id, nome, email, senha, telefone, cpf } = this.state;

    let cliente = {
      id: id,
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      cpf: cpf,
    };

    const resposta_servidor = await updateCliente(cliente);

    this.setState(
      {
        state: this.initState(),
      },
      this.listarCliente()
    );
  }

  listarCliente = () => {
    this.props.history.push("/cliente/listar");
  };

  render() {
    const { id, nome, email, senha, telefone, cpf } = this.state;

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
                      className="form-control "
                    />
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
                      className="form-control"
                    />
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
                      className="form-control"
                    />
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
                      className="form-control"
                    />
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
                      className="form-control"
                    />
                  </div>
                </div>
                <input type="hidden" id="id" name="id" value={id} />
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
                    Cancelar Alteração do Cliente
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

export default AlterarCliente;
