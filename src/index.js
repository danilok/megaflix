import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

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
const Pagina404 = () => (<div>Página 404</div>)

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

