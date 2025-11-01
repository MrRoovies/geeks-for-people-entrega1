document.addEventListener('input', (e) => {
    const target = e.target;
    if (target.id === 'cpf') target.value = target.value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    if (target.id === 'telefone') target.value = target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
    if (target.id === 'cep') target.value = target.value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
});