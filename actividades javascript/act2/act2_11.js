function numero_par(){
    let condicion = 'TRUE'
    while(condicion == 'TRUE'){
        let numero = parseInt(prompt('Dime un numero'))
        if(numero %2) {
            window.alert('El numero es impar')
        } else {
            window.alert('El numero es par')
        }
    }
}