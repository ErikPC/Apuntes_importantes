# Using Closures

Para las variables que necesitamos usar a lo largo del tiempor, en lugar de colocándolos en alcances externos más grandes podemos encapsularlos (alcance más estrecho) pero aún conserva el acceso desde funciones internas. Funciones via closures

Son carácteristicas lingüisticas más importantes jamás inventadas en programación: subyace a los principales paradigmas de programación incluyendo programacion funcional.

Closure es un comportamiento de funciones y solo funciones. Para que se observe el closure, se debe invocar una función, y especificamente se debe invocado en una rama diferente de la cadena de ámbito desde donde se definió originalmente. Las referencias de la funcion interna a la variable en un ámbito externo se denomina closure.

El `estudiante => student.id == studentID` la funcione de flecha de ID de estudiante esta creando otra burbuja de alcance dentro de `greetingStudent()` alcande de la funcion esta funcion de flecha pasó como una devolucion de llamada a la matriz. El metodo `find()` tiene que mantener el closure sobre `sutdentID`,en lugar de `greetingStudent()`

## Adding closures

```JS
function adder(num1) {
    return function addTo(num2){
        return num1 + num2;
    };
}
var add10To = adder(10);
var add42To = adder(42);

add10To(15); // 25
add42To(9); // 51
```

Aunque el closure se basa en el alcance léxico, que se maneja en tiempo de compilacion, el closure se observa como una carácteristica de tiempo de ejecución de las instancias de función.

## Live Link, Not a Snapshot

Al cerrar una variable en una función, podemons seguir usando esa variable (lectura y escritura) siempre que esa funcion de referencia exista en el programa

```JS
function makeCounter() {
    var count = 0;
    return function getCurrent() {
        count = count + 1;
        return count;
    };
}
var hits = makeCounter();
// later
hits(); // 1

// later
hits(); // 2
hits(); // 3
```

## Common Closures: Ajax and Events

```JS
function lookupStudentRecord(studentID) {
    ajax(
        `https://some.api/student/${ studentID }`,
        function onRecord(record) {
            console.log(
                `${ record.name } (${ studentID })`
            );
        }
    );
}
lookupStudentRecord(114);
// Frank (114)
```

Entonces, ¿por qué aún existe el ID de estudiante y es accesible para la devolución de llama? Closure

Los controladores de eventos son otro uso común del cierre:

```JS
function listenForClicks(btn,label) {
    btn.addEventListener("click",function onClick(){
        console.log(
            `The ${ label } button was clicked!`
        );
    });
}
var submitBtn = document.getElementById("submit-btn");
listenForClicks(submitBtn,"Checkout");
```

El parametro `label` se cierra con la devolución de llamada de controlador de eventos `onClick()`
