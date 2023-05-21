import './style.css';
import validator from 'validator';

const button = document.getElementById('validate');
const inputText = document.getElementById('validate-text');
const type = document.getElementById('validation-type');
const result = document.getElementById('result');

const checkEmailorCPF = (evt) => {
    evt.preventDefault();
    switch (type.value) {
    case 'E-mail':
        result.innerHTML = `A validação retornou: ${validator.isEmail(inputText.value)}`;
        break;
    case 'CPF':
        result.innerHTML = `A validação retornou: 
        ${validator.isNumeric(inputText.value)}`;
        break;
    case 'Password':
        result.innerHTML = `A validação retornou: 
        ${validator.isStrongPassword(inputText.value)}`;
        break;
    default:
        result.innerHTML = 'Por favor, selecione o tipo de validação';
    }
};

button.addEventListener('click', checkEmailorCPF);
