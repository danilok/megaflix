import { useState } from 'react';

function useForm(valoresIniciais) {

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evento) {
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

  function resetForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    resetForm,
  }
}

export default useForm;