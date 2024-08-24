import axios from 'axios';

export const usuariosPenalizados = () => {
    return axios.get(`http://localhost:5196/api/ListarUsuariosConPenalidades/GetListarUsuariosConPenalidades`);
};

export const usuariosInactivos = () => {
    return axios.get(`http://localhost:5196/api/sp_ObtenerUsuariosInactivos/GetObtenerUsuariosInactivos`);
};
