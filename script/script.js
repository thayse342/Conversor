// var categoria = document.getElementById('categoria')
// var entrada = document.getElementById('unidade-entrada')
// var saida = document.getElementById('unidade-saida')

// function escolherCategoria() {
//     if (categoria.value == 'comprimento') {
//     escolherUnidades('metro','centimetro','polegada')
//     }
//     if (categoria.value == 'peso') {
//         escolherUnidades ('kg','grama','libra')
//     }
//     if (categoria.value == 'temperatura') {
//         escolherUnidades ('celsius','Fr', 'kelvin')
//     }
// }

// function escolherCategoriaSaida() {
//     if (categoria.value == 'comprimento') {
//         escolherUndiadesdeSaida('metro','centimetro','polegada')
//     }
//     if (categoria.value == 'peso') {
//         escolherUndiadesdeSaida ('kg','grama','libra')
//     }
//     if (categoria.value == 'temperatura') {
//         escolherUndiadesdeSaida ('celsius','Fr', 'kelvin')
//     }
// }

// function escolherUnidades(medida1, medida2,medida3) {
//     entrada.innerHTML = 
//     <option value="">Escolha uma opção</option>
//     <option value="${medida1}">${medida1}</option>
//     <option value="${medida2}">${medida2}</option>
//     <option value="${medida3}">${medida3}</option>


// }

// function escolherUndiadesdeSaida(medida1, medida2, medida3){
//     if (entrada.value == medida1) {
//         saida.innerHTML = 
//     <option value="">Escolha uma opção</option>
//     <option value="${medida2}">${medida2}</option>
//     <option value="${medida3}">${medida3}</option>

//     }

//     if (entrada.value == medida2) {
//         saida.innerHTML = 
//     <option value="">Escolha uma opção</option>
//     <option value="${medida1}">${medida1}</option>
//     <option value="${medida3}">${medida3}</option>

//     }

//     if (entrada.value == medida3) {
//         saida.innerHTML = 
//     <option value="">Escolha uma opção</option>
//     <option value="${medida2}">${medida2}</option>
//     <option value="${medida1}">${medida1}</option>
//     }
// }
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
        document.getElementById("unidadesDeEntrada").options.add(new Option("Celsius", "celsius"))
        document.getElementById("unidadesDeEntrada").options.add(new Option("Fr", "fr"))
        document.getElementById("unidadesDeEntrada").options.add(new Option("Kelvin", "kelvin"))
    }
})

// Unidade de saida temperatura
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change', function () {
    if (categoriaMedidas.value == 'temperatura')
        if (unidadesDeEntrada.value == 'celsius') {
            //  escolherUnidades('fr','kelvin')
            unidadesDeSaida.appendChild(new Option("Fr", "fr"));
            unidadesDeSaida.appendChild(new Option("Kelvin", "kelvin"));

        }
}
)
// Unidade de saida temperatura
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'temperatura') {
        if (unidadesDeEntrada.value == 'fr') {
            //  escolherUnidades('celsius','kelvin')
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
            <option value="celsius">celsius</option>
                <option value="kelvin">kelvin</option>`
        }
    }
})
//Unidade de saida temperatura
new Option("optionText", "optionValue")
unidadesDeEntrada.addEventListener('change', function () {
    if (categoriaMedidas.value == 'temperatura') {
        if (unidadesDeEntrada.value == 'kelvin') {
            //  escolherUnidades('celsius','kelvin')
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
                    <option value="Celsius">celsius</option>
                        <option value="Fr">fr</option>`

        }
    }
})
// Unidade de entrada peso
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change', function () {
    if (categoriaMedidas.value == 'peso') {
        // escolherUnidades('celsius','fr','kelvin')
        document.getElementById("unidadesDeEntrada").options.add(new Option("Quilogramas", "quilogramas"))
        document.getElementById("unidadesDeEntrada").options.add(new Option("Gramas", "gramas"))
        document.getElementById("unidadesDeEntrada").options.add(new Option("Libras", "libras"))
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
        document.getElementById("unidadesDeEntrada").options.add(new Option("Metros", "metros"))
        document.getElementById("unidadesDeEntrada").options.add(new Option("Centimetros", "centimetros"))
        document.getElementById("unidadesDeEntrada").options.add(new Option("Polegadas", "polegadas"))
    }
})
// Unidade de saida (centimetros,polegadas)
new Option("optionText", "optionValue")
categoriaMedidas.addEventListener('change',function(){
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
unidadesDeEntrada.addEventListener('change',function() {
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
unidadesDeEntrada.addEventListener('change',function() {
    if (categoriaMedidas.value == 'comprimento') {
        if (unidadesDeEntrada.value == 'polegadas') {
            unidadesDeSaida.innerHTML = `<option value="">Escolha uma opção</option>
            <option value="metros">metros</option>
                <option value="centimetros">centimetros</option>`
        }
    }
})

function conversao

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



function comprimento(unidadeDeEntrada, valorEntrada, unidadeDeSaida, valorSaida) {
    if (unidadeDeEntrada == "metro") {

        if (unidadeDeSaida == "centimetro") {
            return metrosCentimetros(valorEntrada, valorSaida)
        }
        if (unidadeDeSaida == "polegada") {
            return metrosPolegadas(valorEntrada, valorSaida)
        }
    }
    if (unidadesDeEntrada == "centimetro") {

        if (unidadeDeSaida == "metro") {
            return centimetrosMetros(valorEntrada, valorSaida)
        }
        if (unidadeDeSaida == "polegada") {
            return centimetrosPolegadas(valorEntrada, valorSaida)
        }
    }
    if (unidadeDeEntrada == "polegada") {

        if (unidadeDeSaida == "metro") {
            return polegadasMetros(valorEntrada, valorSaida)
        }

        if (unidadeDeSaida == "centimetro") {
            return polegadasMetros(valorEntrada, valorSaida)

        }

    }
}

function Temperatura(unidadeDeEntrada, valorEntrada, unidadeDeSaida, valorSaida) {
    if (unidadeDeEntrada == "celsius") {

        if (unidadeDeSaida == "fr") {
            return celsiusFr(valorEntrada, valorSaida)
        }
        if (unidadeDeSaida == "kelvin") {
            return celsiusKelvin(valorEntrada, valorSaida)
        }
    }

    if (unidadeDeEntrada == "fr") {

        if (unidadeDeSaida == "celsius") {
            return frCelsius(valorEntrada, valorSaida)
        }

        if (unidadeDeSaida == "kelvin") {
            return frKelvin(valorEntrada, valorSaida)
        }
    }

    if (unidadeDeEntrada == "kelvin") {

        if (unidadeDeSaida == "celsius") {
            return kelvinCelsius(valorEntrada, valorSaida)
        }

        if (unidadeDeSaida == "fr") {
            return kelvinFr(valorEntrada, valorSaida)
        }
    }
}

function Peso(unidadeDeEntrada, valorEntrada, unidadeDeSaida, valorSaida) {
    if (unidadeDeEntrada == "quilogramas") {

    }

    if (unidadeDeSaida == "gramas") {
        return quilogramasGramas(valorEntrada, valorSaida)
    }

    if (unidadeDeSaida == "libras") {
        return quilogramasLibras(valorEntrada, valorSaida)
    }

    if (unidadeDeEntrada == "gramas") {
    }
    if (unidadeDeSaida == "quilogramas") {
        return gramasQuilogramas(valorEntrada, valorSaida)
    }
    if (unidadeDeSaida == "libras") {
        return gramasLibras(valorEntrada, valorSaida)
    }

    if (unidadeDeEntrada == "libra") {
    }

    if (unidadeDeSaida == "quilogramas") {
        return librasGramas(valorEntrada, valorSaida)
    }
    if (unidadeDeSaida == "gramas") {
        return librasGramas
    }
}
