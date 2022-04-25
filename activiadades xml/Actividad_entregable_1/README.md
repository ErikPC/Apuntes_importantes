# Activitat

1- Definir una DTD interna per validar el document XML que es mostra a continuació. Abans de validar, comprova si està ben format. La DTD ha de tenir en compte:

- Dins l'element arrel i pot haver més d'un element fill.

- L'element "producte" podrà ser ò "ratoli" o "teclat" o "monitor".

- "ratoli", "teclat" i "monitor" han de tenir un codi identificador únic. No poden ser elements buits.

```xml
<productes>
    <producte>
        <ratoli codi="r01"> sense fil space </ratoli>
    </producte>
    <producte>
        <teclat codi= "t03">Teclat de colors </teclat>
    </producte>
    <producte>
        <teclat codi= "t04">Teclat de colors </teclat>
        <monitor codi="m100">Tàctil</monitor>
    </producte>
 </productes>
```

2- Definir una DTD interna per validar el document XML que es mostra a continuació. Abans de validar, comprova si està ben format. La DTD ha de tenir en compte:

- Dins l'element arrel i pot haver més d'un element fill.

- L'element "persona" tendrà un atribut "identif" que serà obligatori i de tipus identificador, i un atribut "sexe" que no serà obligatori.

- L'element "parentesc", podrà tenir els següents atributa: "pare", "germa", que indicaran la relació de parentesc que tendrà un element "persona" amb els altres elements "persona".

```xml
<?xml version="1.0" ?>
<relacio>
   <persona sexe="home" identif="A01">
      <nom>LLuís Merino</nom>
      <email>llm@gmail.com</email>
      <parentesc pare="B02 C03"/>
   </persona>
   <persona sexe="home" identif="B02">
      <nom>Rodrigo Merino</nom>
      <email>rodrigo@gmail.com</email>
      <parentesc germa="C03"/>
   </persona>
   <persona identif="C03">
      <nom>Ana Merino</nom>
      <email>anam@icloud.com</email>
      <parentesc germa="B02"/>
   </persona>
</relacio>
```

3- Crea un esquema XSD que guardaràs com a "clients.xsd", que validi el següent arxiu XML. Afegeix comentaris que expliquin breument el codi XSD:

```xml
XML: "persones.xml"
<clients>
   <client codi="001">
      <llinatge>Alomar<llinatge>
      <edat>30</edat>
      <data_naixement poblacio="Palma de Mallorca">3-10-1989</data_naixement>
      <email>alomar@gmail.com</email>
   </client>
   <client codi="002">
      <llinatge>Pérez<llinatge>
      <edat>47</edat>
      <data_naixement poblacio="Ciutadella">3-10-1975</data_naixement>
      <telefon>600898989</telefon>
   </client>
</clients>
```

4- Escriu un XSD que declari un element complex, que guardaràs amb el nom "capell.xsd" que tengui dos elements fills: "color" i "model", els dos de tipus cadena, i que apareguin en el mateix ordre. Afegeix els comentaris necessaris.

5- Escriu un XSD que declari un element complex, que guardaràs amb el nom "vehicle.xsd" que tengui un fill que podrà ser: "cotxe" o "moto" o "camió" (tots del tipus cadena). Afegeix els comentaris necessaris.

6- Definir un esquema XSD perquè les dades contingudes en el següent fitxer XML siguin validades correctament. l'arxiu de l'esquema XSD s'anomenarà "film.xsd"). Explicar mitjançant comentaris l'esquema:

```xml
XML: "pelicules.xml"
<?xml version="1.0"?>
<pelicula titol="Brazil" minuts="142"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="film.xsd">
    <director>Terry Gilliam</director>
    <repartiment>
       <interpret>Jonathan Pryce</interpret>
       <interpret>Robert De Niro</interpret>
       <interpret>Kim Greist</interpret>
       <interpret>Michael Palin</interpret>
       <interpret>Ian Holm</interpret>
       <interpret>Bob Hoskins</interpret>
    </repartiment>
</pelicula>
```

7- Escriure un XML Schema (anomenat "institut.xsd") que validi el següent document XML, i si és necessari fer algun canvi a l'XML tant per que estigui ben format i al final ben validat.

```xml
Document XML: "institut.xml"
<?xml version="1.0"?>
<institut>
   <alumne data_naixement="1-1-2005">
      <dades>
         <nom>Harry</nom>
         <llinatges>Potter</llinatges>
         <dni>411113333</dni>
      </dades>
      <comentaris>Un poc dispers</comentaris>
   </alumne>
   <alumne data_naixement="2-2-1999">
      <dades>
         <nom>Bart</nom>
         <llinatges>Simpson</llinatges>
         <dni>566565656</dni>
      </dades>
      <comentaris>caòtic</comentaris>
   </alumne>
   <alumne data_naixement="3-3-1975">
      <dades>
         <nom>Darth</nom>
         <llinatges>Vader</llinatges>
         <dni>100000012</dni>
       </dades>
       <comentaris>Misteriós</comentaris>
   </alumne>
</institut>
```

A més del que tu puguis extreure a partir de l'XML, també has de tenir en compte els següent requeriments per elaborar l'XSD:

- Tots els elements que apareixen en el document són obligatoris (excepte < comentaris >) i han d'aparèixer sempre en el mateix ordre. L'element < comentaris > no és obligatori i només pot aparèixer 1 vegada com a màxim.

- S'han de definir dos tipus de dades, "tipus_dni" (els elements < dni > seran d'aquest tipus) i "informacio" (els elements < comentaris > seran d'aquest tipus). Aquest tipus de dades personalitzats ha de tenir les següents restriccions:

  - tipus_dni: Ha de tenir 9 dígits.
  - informacio: Longitud mínima de 5 caràcters i longitut màxima de 50 caràcters.

- L'atribut "data_naixement" és de tipus "date".
