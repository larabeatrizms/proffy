import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/31808723?s=460&u=b179273fc0eed3ee84909480985413c513a6ee81&v=4"
          alt="Lara Beatriz"
        />

        <div>
          <strong>Lara Beatriz</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br />
        <br />
        Apaixonada por tecnologia. Estudante de Eng. da computação na UFRN e
        embaixadora de desenvolvimento(ReactJS, React Native e Node.js) na
        Rocketseat
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
