import React, { useContext } from 'react';
import Form from '../Components/Form'
import '../styles/contact.css';
import { GlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={`form-container ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact