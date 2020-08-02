import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const { values, handleChange, resetForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((response) => {
        setCategorias(response);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro Vídeo</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        const categoriaId = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaId.id,
        })
          .then(() => {
            console.log('Cadastrou com sucessso!');
            history.push('/');
          });
        resetForm({
          titulo: '',
          url: '',
          categoria: '',
        });
      }}
      >

        <FormField
          label="Nome do Vídeo"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button 
          as="button"
          type="submit">
          Cadastrar
        </Button>
      </form>
      <br />
      <Link to="/cadastro/categoria">
        Cadastrar de Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
