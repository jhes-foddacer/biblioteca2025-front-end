import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaLivro() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/livro`);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloLista titulo="Livros"
                descricao="Gerencie aqui os livros da biblioteca"
                rota="/cadastrolivro" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Ano</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Editora</th>
                                <th scope="col">Edição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrolivro/${d.idlivro}`}>Alterar</a>
                                    </td>
                                    <td>{d.idlivro}</td>
                                    <td>{d.titulo}</td>
                                    <td>{d.publicacao}</td>
                                    <td>{d.idcategoria}</td>
                                    <td>{d.ideditora}</td>
                                    <td>{d.edicao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};