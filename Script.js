function calcularArea() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");


    base = parseFloat(base);
    altura = parseFloat(altura);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        resultado.classList.remove("d-none");
        resultado.classList.add("alert-danger");
        resultado.innerHTML = "Por favor, ingrese valores válidos (mayores a 0).";
        return;
    }
    let area = base * altura;  
    
    
    resultado.classList.remove("d-none", "alert-danger");
    resultado.classList.add("alert-info");
    resultado.innerHTML = `El área del rectángulo es: <strong>${area}</strong>`;
}

function limpiarCampos() {
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
    let resultado = document.getElementById("resultado");
    resultado.classList.add("d-none");
    resultado.innerHTML = "";
}


