import { useState } from 'react';



const useFormValidation = (config) => {
    const [ errors, setErrors] = useState({})

    const validate = (data) =>{
        const newErrors = {};

        Object.entries(config).forEach(([Field, rules]) =>{
            if(rules.required && !data[field]) {
                newErrors[field] = rules.mensagem;
            }
            if(rules.min && data[field].length < rules.min){
                newError[field] = rules.mensagem;

            }

            if(rules.regex && !rules.regex.test(data[field]) ){
                newErros[field] = rules.mensagem;

            }
            if(rules.regex && data[field].length < rules.min){
                newErrors[field] = rules.mensagem;

            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {errors, validate};
};

export default useFormValidation;