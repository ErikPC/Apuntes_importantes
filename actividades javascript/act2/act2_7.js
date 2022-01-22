function datos_persona(){
    let nombre = prompt('dime tu nombre')
    let edad = prompt('Dime tu edad')
    let estatura = prompt('Dime tu estatura')
    let estado_civil = prompt('Dime tu estado civil , soltero o casado')
    console.log(estado_civil)
    if(estado_civil == 'casado') {
        document.write('<p>' + nombre + ' ' + edad + ' ' + estatura + ' ' + estado_civil + '</p>')
    } else {
        document.write('<p>' + nombre + '<br/>' + edad + '<br/>' + estatura + '<br/>' + estado_civil + '</p>')
    }
}