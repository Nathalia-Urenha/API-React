import React, { Component } from "react";
import { findAllUsuarios } from "../service/UsuarioService";

class ListarUsuario extends Component {
  constructor() {
    super();
    this.state = this.initState();
  }

  initState = () => ({
    usuarios: [],
  });

  async componentDidMount() {
    const usuarios = await findAllUsuarios();
    console.log(usuarios.data);
    this.setState({
      usuarios: usuarios.data,
      paginaInicio: usuarios.current_page,
      paginaFim: usuarios.total,
    });
  }

  render() {
    const { usuarios } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListarUsuario;
