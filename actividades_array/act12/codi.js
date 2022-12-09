const strings = ["hola", "como", "estas", "desarrollo", "javascript"];

// eliminamos de 'strings' aquellos elementos que tengan una longitud inferior a 5
const stringsFiltrados = strings.filter((string) => string.length >= 5);

console.log(stringsFiltrados);
