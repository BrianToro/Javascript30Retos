const inputs = document.querySelectorAll('.container-input input')

function cambiarElemento(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {input.addEventListener('change', cambiarElemento)})
inputs.forEach(input => {input.addEventListener('mousemove', cambiarElemento)})