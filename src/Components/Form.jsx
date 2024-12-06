import {useState} from "react";
import '../styles/form.css';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name.length < 6 || !/\S+@\S+\.\S+/.test(formData.email)) {
        setError("Por favor verifique su información nuevamente");
        setSuccess(null);
      } else {
        setSuccess(
          `Gracias ${formData.name}, te contactaremos cuanto antes vía mail`
        );
        setError(null);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre Completo"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default Form;
