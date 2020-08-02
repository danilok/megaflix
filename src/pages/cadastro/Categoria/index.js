import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { values, handleChange, resetForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  /* useEffect usa dois parametros, primeiro a função
  /* segundo parâmetro pode ser vazio e isso indica que será executado a qualquer interação,
  /* se for um array vazio ([]), será executado apenas uma vez */
  useEffect(() => {
    categoriasRepository.getAll()
      .then((response) => {
        setCategorias(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then((response) => {
            setCategorias([
              ...categorias,
              response,
            ]);
          });

        resetForm(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />
        <br />
        <Button as="button">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
