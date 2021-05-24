import React, { Component } from "react";
import { Link } from "react-router-dom";
import { findAllClientes } from "../service/ClienteService";
import IncluirCliente from "./incluir";

class ListarCliente extends Component {
  constructor() {
    super();
    this.state = this.initState();
  }

  initState = () => ({
    clientes: [],
  });

  async componentDidMount() {
    const clientes = await findAllClientes();
    this.setState({
      clientes: clientes.data,
      paginaInicio: clientes.current_page,
      paginaFim: clientes.total,
    });
  }

  render() {
    const { clientes } = this.state;
    return (
      <div className="container">
        <div className="app-title">
          <h1>
            <i className="fa fa-edit">Lista de Clientes</i>
          </h1>
          <ul className="app-bredcrumb breadcrumb">
            <li className="breadcrumb-item">
              <i className="fa fa-search fa-lg"></i>
            </li>
            <li className="breadcrumb-item">
              <Link path="/">Menu Principal</Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="tile">
            <div className="tile-body">
              <div id="no-more-tables">
                <table className="table table-striped table-bordered table-hover cf">
                  <thead className="cf">
                    <tr>
                      <th>Codigo</th>
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>Celular</th>
                      <th>Endereço</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientes.map((cliente) => (
                      <tr>
                        <td data-title="Id">{cliente.id}</td>
                        <td data-title="Nome">{cliente.nome}</td>
                        <td data-title="E-mail">{cliente.email}</td>
                        <td data-title="Celular">{cliente.telefone}</td>
                        <td data-title="Endereço">{cliente.endereco}</td>
                        <td data-title="Ações">
                          <Link className="btn btn-info btn-sm">
                            <i className="fa fa-pencil"></i>
                          </Link>
                          <Link className="btn btn-danger btn-sm">
                            <i className="fa fa-trash"></i>
                          </Link>
                          <Link className="btn btn-warning btn-sm">
                            <i className="fa fa-address-book"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link className="btn btn-success btn-sm" to="/cliente/incluir">
                  Incluir<i className="    a fa-plus-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListarCliente;
