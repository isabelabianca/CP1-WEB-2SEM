import React from 'react'
import Menu from './components/menu/Menu'
import Conteudo from './components/conteudo/Conteudo'
import './Cnn.css'

/*Foi utilizado um pouco de bootstrap no código por força de habito, mas sem nenhum componente pronto!!
Para instalar: npm install react-bootstrap@next bootstrap@5.1.0

 */

const Cnn = () => {
  return (
    <div className="App">
      <Menu/>
      <Conteudo/>
    </div>
  );
}

export default Cnn;
