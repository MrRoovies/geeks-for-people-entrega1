/* =========================
   Validação de formulários com aviso ao usuário
   ========================= */

const form = document.querySelector('form');

if(form){
    form.addEventListener('submit', e => {
        let valid = true;
        const cpf = document.getElementById('cpf');
        const telefone = document.getElementById('telefone');
        const cep = document.getElementById('cep');

        // Verifica CPF (apenas números e 11 dígitos)
        if(!/^\d{11}$/.test(cpf.value.replace(/\D/g,''))){
            alert('CPF inválido! Deve conter 11 números.');
            valid = false;
        }

        // Verifica telefone (10-11 dígitos)
        if(!/^\d{10,11}$/.test(telefone.value.replace(/\D/g,''))){
            alert('Telefone inválido!');
            valid = false;
        }

        // Verifica CEP (8 dígitos)
        if(!/^\d{8}$/.test(cep.value.replace(/\D/g,''))){
            alert('CEP inválido!');
            valid = false;
        }

        if(!valid) e.preventDefault();
    });
}
