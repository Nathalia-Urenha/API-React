import http from '../util/banco';

export const findAllClientes = async () =>{
    return(
        http.get('/usuario/listar')
        .then( response => {
            return  response.data;
        })
    )
}