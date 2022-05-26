# Actividad 1 XPATH

1. Si tenim el fitxer "iesvirtual.xml", que conté les notes finals dels alumnes d'alguns cicles de l'institut:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<institut nom="Institut Virtual">
    <cicles>
        <especialitat nom="Informàtica">
            <cicle id="ASIX" grau="Superior">Administració de Sistemes Informàtics i Xarxes</cicle>
            <cicle id="SMX" grau="Mitjà">Sistemes Microinformàtics i Xarxes</cicle>
        </especialitat>
        <especialitat nom="Electricitat">
            <cicle id="IEA" grau="Mig">Instal·lacions elèctriques i automàtiques</cicle>
        </especialitat>
    </cicles>
    <notes>
        <classe nom="SMX">
            <alumne aprovat="SI">
                <nom>Fani Garí</nom>
                <nota>7</nota>
                <email>fany@hotmail.com</email>
                <genere>Dona</genere>
            </alumne>
            <alumne aprovat="NO">
                <nom>Àngel Far</nom>
                <email>angelfb@gmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Miquel Escobar</nom>
                <nota>6</nota>
                <email>m_e@gmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Francis Pou</nom>
                <nota>5</nota>
                <email>pous@hotmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Mercè Pujol</nom>
                <nota>8</nota>
                <email>mpujol@hotmail.com</email>
                <genere>Dona</genere>
            </alumne>
        </classe>
        <classe nom="ASIX">
            <alumne aprovat="NO">
                <nom>Joan Sastre</nom>
                <email>js@gmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Mina Pons</nom>
                <nota>6</nota>
                <email>mina@gmail.com</email>
                <genere>Dona</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Javier Pérez</nom>
                <nota>6</nota>
                <email>jape@xmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Fonsi Nieto</nom>
                <nota>5</nota>
                <email>fnieto@gmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Bernat Segura</nom>
                <nota>9</nota>
                <email>berni@hotmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="NO">
                <nom>Sisi Bardají</nom>
                <email>sisi@gmail.com</email>
                <genere>Dona</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Felip Contestí</nom>
                <nota>5</nota>
                <email>fc@gmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="NO">
                <nom>Rosa Roig</nom>
                <email>rroig@hotmail.com</email>
                <genere>Dona</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Magdalena Sierra</nom>
                <nota>9</nota>
                <email>magdas@gmail.com</email>
                <genere>Dona</genere>
            </alumne>
        </classe>
        <classe nom="IEA">
            <alumne aprovat="SI">
                <nom>Mariano</nom>
                <nota>6</nota>
                <email>mariano@hotmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="NO">
                <nom>Pedro</nom>
                <email>pedros@hotmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Aida</nom>
                <nota>7</nota>
                <email>aida@gmail.com</email>
                <genere>Dona</genere>
                ç
            </alumne>
            <alumne aprovat="SI">
                <nom>Pau</nom>
                <nota>5</nota>
                <email>pau@gmail.com</email>
                <genere>Home</genere>
            </alumne>
            <alumne aprovat="SI">
                <nom>Joan</nom>
                <nota>5</nota>
                <email>joan@gmail.com</email>
                <genere>Home</genere>
            </alumne>
        </classe>
    </notes>
</institut>
```

## Preguntas

### Genera les expressions XPath que responen les preguntes següents:

1.1. Quins cicles formatius s'imparteixen a l’institut?

```xpath
/institut/cicles/especialitat/cicle
```

1.2. Quins cicles formatius de grau mitjà hi ha?

```xpath
/institut/cicles/especialitat/cicle[@grau="Mitjà"]
```

1.3. Quins són els noms dels alumnes que han suspès?

```xpath
/institut/notes/clase/alumne[@aprovat="NO"]/nom
```

1.4. Quines dones cursen el cicle d'ASIX?

```xpath
/institut/notes/classe[@nom="ASIX"]/alumne[genere="Dona"]
```

1.5. Quins alumnes suspesos tenen un compte a gmail.com?

```xpath
/institut/notes/classe/alumne[@aprovat="NO" and ends-with(email,"@gmail.com")]
```

1.6. En quins cicles hi ha alumnes que han tret un 9?

1.7. Quin percentatge d'aprovats té el centre?
