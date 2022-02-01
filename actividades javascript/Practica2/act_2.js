function descuento(){
    let marcas = [' Ford ', ' Seat ' , ' Citroen ' , ' Audi ']
    window.alert('Estas son las marcas disponibles ' + marcas)
    let coche = prompt('Escribe la marca deseada')
    let precio
    switch (coche) {
        case 'Ford' : 
            window.alert('El descuento es de un 10%')
            precio = prompt('Cuanto cuesta')
            window.alert(precio-(precio*0.10))
            break
        case 'Seat' :
            window.alert('El descuento es de un 8%')
            precio = prompt('Cuanto cuesta')
            window.alert(precio-(precio*0.08))
            break
        case 'Citroen':
            window.alert('El descuento es de un 6%')
            precio = prompt('Cuanto cuesta')
            window.alert(precio-(precio*0.06))
            break
        case 'Audi' :
            window.alert('El descuento es de un 4%')
            precio = prompt('Cuanto cuesta')
            window.alert(precio-(precio*0.04))
            break
    }

}