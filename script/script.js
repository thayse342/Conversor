var categoriaMedidas = document.getElementById('categoriasMedidas');
var unidadesDeEntrada = document.getElementById('unidadesDeEntrada');
var unidadesDeSaida = document.getElementById('unidadesDeSaida');
var valor = document.getElementById('valor');
var conversao = document.getElementById('conversao');
var resultadoConversao = document.getElementById('resultadoConversao');

// Unidades de entrada temperatura
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change', function () {
    if (categoriaMedidas.value == 'temperatura') {
        // escolherUnidades('celsius','fr','kelvin')
        unidadesDeEntrada.innerHTML = ""
        unidadesDeEntrada.innerHTML = `
        <option value="">Escolha uma opção</option>
        <option value="celsius">celsius</option>
        <option value="Fr">fr</option>
        <option value="Kelvin">kelvin</option> ` 
    }
})

// Unidade de saida temperatura
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
        if (unidadesDeEntrada.value == 'celsius') {
            //  escolherUnidades('fr','kelvin')
            unidadesDeSaida.appendChild(new Option("Fr", "fr"));
            unidadesDeSaida.appendChild(new Option("Kelvin", "kelvin"));
        }
})

// Unidade de saida temperatura
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'temperatura') {
        if (unidadesDeEntrada.value == 'fr') {
            //  escolherUnidades('celsius','kelvin')
            unidadesDeSaida.innerHTML = ""
            unidadesDeSaida.innerHTML = `
                <option value="">Escolha uma opção</option>
                <option value="celsius">celsius</option>
                <option value="kelvin">kelvin</option>
                
                `
        }
    }
})
//Unidade de saida temperatura
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'temperatura') {
        if (unidadesDeEntrada.value == 'kelvin') {
            //  escolherUnidades('celsius','fr')
            unidadesDeSaida.innerHTML = ""
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
                    <option value="Celsius">celsius</option>
                        <option value="Fr">fr</option>`
            
        }

        if (unidadesDeEntrada.value == 'celsius') {
            //  escolherUnidades('celsius','fr')
            unidadesDeSaida.innerHTML = ""
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
                    <option value="Kelvin">kelvin</option>
                        <option value="Fr">fr</option>`
            
        }
    }
})
// Unidade de entrada peso
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change', function () {
    if (categoriaMedidas.value == 'peso') {
        unidadesDeEntrada.innerHTML = ""
            unidadesDeEntrada.innerHTML = `<option value="">Escolha uma opção</option>
                    <option value="gramas">gramas</option>
                        <option value="quilogramas">quilogramas</option>
                        <option value="Libras">libras</option> `

            }
})
// Unidade de saida peso
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change', function () {
    if (categoriaMedidas.value == 'peso')
        if (unidadesDeEntrada.value == 'quilogramas') {
            //  escolherUnidades('fr','kelvin')
            unidadesDeSaida.appendChild(new Option("gramas", "gramas"));
            unidadesDeSaida.appendChild(new Option("libras", "libras"));

        }
}
)
//Unidade de saida peso
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'peso') {
        if (unidadesDeEntrada.value == 'gramas') {
            //  escolherUnidades('celsius','kelvin')
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
            <option value="quilogramas">quilogramas</option>
                <option value="libras">libras</option>`
        }
    }
})
// Unidade de saida peso
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'peso') {
        if (unidadesDeEntrada.value == 'libras') {
            //  escolherUnidades('celsius','kelvin')
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
            <option value="quilogramas">quilogramas</option>
                <option value="gramas">gramas</option>`
        }
    }
})
// Unidades de entrada comprimento
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change', function () {
    if (categoriaMedidas.value == 'comprimento') {
        // escolherUnidades('metros','centimetros','polegadas')
        unidadesDeEntrada.innerHTML = ""
        unidadesDeEntrada.innerHTML = `<option value="">Escolha uma opção</option>
                <option value="metros">metros</option>
                    <option value="centimetros">centimetros</option>
                    <option value="polegadas">polegadas</option> ` 
    }
})
// Unidade de saida (centimetros,polegadas)
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change', function () {
    if (categoriaMedidas.value == 'comprimento')
        if (unidadesDeEntrada.value == 'metros') {
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
                    <option value="Centimetros">centimetros</option>
                        <option value="Polegadas">polegadas</option>`

        }
}
)
// Unidade de saida (metros,polegadas)
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'comprimento') {
        if (unidadesDeEntrada.value == 'centimetros') {
            //  escolherUnidades('metros','polegadas')
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
            <option value="metros">metros</option>
                <option value="polegadas">polegadas</option>`
        }
    }
})
// Unidades de saida (metros,centimetros)
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'comprimento') {
        if (unidadesDeEntrada.value == 'polegadas') {
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
            <option value="metros">metros</option>
                <option value="centimetros">centimetros</option>`
        }
    }
})

conversao.addEventListener('click', (event) => event.preventDefault())

conversao.addEventListener('click', function () {

    const caixaInput = +valor.value
    if (unidadesDeEntrada.value === 'celsius' && unidadesDeSaida.value === 'fr') {
        resultadoConversao.innerText = celsiusFr(caixaInput)
    }else if (unidadesDeEntrada.value === 'fr' && unidadesDeSaida.value === 'celsius') {
        resultadoConversao.innerText = frCelsius(caixaInput)
    }else if (unidadesDeEntrada.value === 'celsius' && unidadesDeSaida.value === 'kelvin') {
        resultadoConversao.innerText = celsiusKelvin(caixaInput)
    }else if (unidadesDeEntrada.value === 'kelvin' && unidadesDeSaida.value === 'celsius') {
        resultadoConversao.innerText = kelvinCelsius(caixaInput)
    }else if (unidadesDeEntrada.value === 'kelvin' && unidadesDeSaida.value === 'fr'){
        resultadoConversao.innerText = kelvinFr(caixaInput)
    }else if (unidadesDeEntrada.value === 'fr' && unidadesDeSaida.value === 'kelvin'){
        resultadoConversao.innerText = frKelvin(caixaInput)

    }else if (unidadesDeEntrada.value === 'quilogramas' && unidadesDeSaida.value === 'gramas'){
        resultadoConversao.innerText = quilogramasGramas(caixaInput)
    }else if (unidadesDeEntrada.value === 'gramas' && unidadesDeSaida.value === 'quilogramas'){
        resultadoConversao.innerText = gramasQuilogramas(caixaInput)
    }else if (unidadesDeEntrada.value === 'quilogramas' && unidadesDeSaida.value === 'libras'){
        resultadoConversao.innerText = quilogramasLibras(caixaInput)
    }else if (unidadesDeEntrada.value === 'libras' && unidadesDeSaida.value === 'quilogramas'){
        resultadoConversao.innerText = librasQuilogramas(caixaInput)
    }else if (unidadesDeEntrada.value === 'gramas' && unidadesDeSaida.value === 'libras'){
        resultadoConversao.innerText = gramasLibras(caixaInput)
    }else if (unidadesDeEntrada.value === 'libras' && unidadesDeSaida.value === 'gramas'){
        resultadoConversao.innerText = librasGramas(caixaInput)

    }else if (unidadesDeEntrada.value === 'metros' && unidadesDeSaida.value === 'centimetros'){
        resultadoConversao.innerText = metrosCentimetros(caixaInput)
    }else if (unidadesDeEntrada.value === 'centimetros' && unidadesDeSaida.value === 'metros'){
        resultadoConversao.innerText = centimetrosMetros(caixaInput)
    }else if (unidadesDeEntrada.value === 'metros' && unidadesDeSaida.value === 'polegadas'){
        resultadoConversao.innerText = metrosPolegadas(caixaInput)
    }else if (unidadesDeEntrada.value === 'polegadas' && unidadesDeSaida.value === 'metros'){
        resultadoConversao.innerText = polegadasMetros(caixaInput)
    }else if (unidadesDeEntrada.value === 'centimetros' && unidadesDeSaida.value === 'polegadas'){
        resultadoConversao.innerText = centimetrosPolegadas(caixaInput)
    }else if (unidadesDeEntrada.value === 'polegadas' && unidadesDeSaida.value === 'centimetros'){
        resultadoConversao.innerText = polegadasCentimetros(caixaInput)
    }
})

// Unidade de temperatura
function celsiusFr(celsius) {
    const formulaFr = (celsius * 9 / 5) + 32
    return formulaFr
}

function frCelsius(fr) {
    const formulacelsius = (fr - 32) * 5 / 9
    return formulacelsius
}

function celsiusKelvin(celsius) {
    const formulaKelvin = celsius + 273.15
    return formulaKelvin
}

function kelvinCelsius(kelvin) {
    const formulaCelsius = kelvin - 273.15
    return formulaCelsius
}

function kelvinFr(kelvin) {
    const formulaFr = (kelvin - 273.15) * 9 / 5 + 32
    return formulaFr
}

function frKelvin(fr) {
    const formulaKelvin = (fr - 32) * 5 / 9 + 273.15
    return formulaKelvin
}

// Unidade de peso
function quilogramasGramas(quilogramas) {
    const quilosgramasGramas = quilogramas * 1000
    return quilosgramasGramas
}

function gramasQuilogramas(gramas) {
    const gramasQuilogramas = gramas / 1000
    return gramasQuilogramas
}

function quilogramasLibras(quilogramas) {
    var quilogramasLibras = quilogramas * 2.20462
    return quilogramasLibras
}

function librasQuilogramas(libras) {
    var librasQuilogramas = libras / 2.20462
    return librasQuilogramas
}

function gramasLibras(gramas) {
    var gramasLibras = gramas / 453.592
    return gramasLibras
}

function librasGramas(libras) {
    var librasGramas = libras * 453.592
    return librasGramas
}

// Unidade de comprimento
function metrosCentimetros(metros) {
    const metrosCentimetros = metros * 100
    return metrosCentimetros
}

function centimetrosMetros(centimetros) {
    const centimetrosMetros = centimetros / 100
    return centimetrosMetros
}

function metrosPolegadas(metros) {
    var metrosPolegadas = metros * 39.37
    return metrosPolegadas
}

function polegadasMetros(polegadas) {
    var polegadasMetros = polegadas / 39.37
    return polegadasMetros
}

function centimetrosPolegadas(centimetros) {
    const centimetrosPolegadas = centimetros / 2.54
    return centimetrosPolegadas
}

function polegadasCentimetros(polegadas) {
    const polegadasCentimetros = polegadas * 2.54
    return polegadasCentimetros
}