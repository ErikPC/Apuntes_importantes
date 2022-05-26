# Genera les expressions XPath que responen les preguntes següents:

[;) enjoy](https://www.freeformatter.com/xpath-tester.html)

1. Quins cicles formatius s'imparteixen a l’institut?

```xpath

/institut/cicles/especialitat/cicle

```

2. Quins cicles formatius de grau mitjà hi ha?

```xpath

/institut/cicles/especialitat/cicle[@grau="Mitjà"]

```

3. Quins són els noms dels alumnes que han suspès?

```xpath

/institut/notes/classe/alumne[@aprovat="NO"]/nom

```

4. Quines dones cursen el cicle d'ASIX?

```xpath

/institut/notes/classe/alumne[genere="Dona"]

```

5. Quins alumnes suspesos tenen un compte a gmail.com?

```xpath

/institut/notes/classe/alumne[@aprovat="NO" and ends-with("@gmail.com")]

```

6. En quins cicles hi ha alumnes que han tret un 9?

```xpath

/institut/cicles/especialitat/cicle[@id=/institut/notes/classe[alumne/nota>=9]/@nom]

```

7. Quin percentatge d'aprovats té el centre?

```xpath

count(/institut/notes/classe/alumne[@aprovat="SI"]) div count(/institut/notes/classe/alumne) * 100

```
