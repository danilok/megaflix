import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Iframe from 'react-iframe';

/*
Definição rápida para testes tambem
function CadastroVideo() {
  return(
    <div>
      Cadastro de Video
    </div>
  )
}*/

/* Outra forma de definição rápida para teste*/
//const Pagina404 = () => (<div>Página 404</div>)
function Pagina404() {
  return (
    <>
      <h1>Página não encontrada</h1>
      <Iframe url="https://editor.p5js.org/danilo.yorinori/embed/ZUkIs_I0G"
          width="100%"
          height="100%"
          id="myId"
          className="iframe404"
          display="initial"
          position="absolute"></Iframe>
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
      {/*<Route component={ () => (<div>404 not found</div>)} /> para testes rápidos */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

