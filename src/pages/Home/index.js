import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [dadosHome, setDadosHome] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosHome(categoriasComVideos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosHome.length === 0 && (<div>Loading...</div>)}

      {dadosHome.map( (categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription="Rota de aprendizado do JavaScript moderno em 2020"
              />

              <Carousel
                key={categoria.id}
                category={categoria}
              />
            </div>
          )
        }

        return (
          categoria.videos && categoria.videos.length && (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          )
        )
      })}
      </PageDefault>
  );
}

export default Home;
