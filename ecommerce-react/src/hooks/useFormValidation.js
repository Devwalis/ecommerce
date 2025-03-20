const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      });
    };
  
    const handleBlur = (field) => { // Adicionar parâmetro field
      const validationErrors = validate(values);
      setErrors({
        ...errors,
        [field]: validationErrors[field] // Corrigir newError para validationErrors
      });
    };
  
    const handleSubmit = (callback) => (event) => {
      event.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setIsSubmitting(true);
  
      if (Object.keys(validationErrors).length === 0) {
        callback();
      }
    };
  
    return {
      handleChange,
      handleSubmit,
      handleBlur,
      values,
      errors,
      isSubmitting
    };
  };
  
  export default useFormValidation;