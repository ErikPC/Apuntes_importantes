# A partir del document "lliga.xml", es volen obtenir una sèrie de respostes a partir d'expressions Xpath:

[;) enjoy](https://www.freeformatter.com/xpath-tester.html)

1. Quants partits han jugat els "Lleons"?

```xpath

count(/lliga/jornada/partit[equip/nom="Lleons"])

```

2. Quins partits han jugat a casa els "Elefants"?

```xpath

/lliga/jornada/partit[equip[nom="Elefants" and @juga="local"]]

```

3. Quants jugadors han marcat gols abans de la mitja part (minut 45) jugant com a locals?

```xpath

count(/lliga/jornada/partit/equip[@juga="local"]/gols/jugador[@minut<=45])

```

4. Quants partits en els quals jugaven els "Elefants" han quedat empatats?

```xpath

count(/lliga/jornada/partit[equip/nom="Elefants"][equip[@juga="local"]/resultat=equip[@juga="visitant"]/resultat])

```

5. En quines jornades els "Lleons" han jugat a casa?

```xpath

/lliga/jornada[partit[equip[nom="Lleons" and @juga="local"]]]

```

6. Quina és la mitjana de gols per partit dels "Cavalls"?

```xpath

avg(/lliga/jornada/partit/equip[nom="Cavalls"]/resultat)

```

7. Trobar la suma total de tots els resultats. Per exemple, resultat dia 1 és 3, resultat dia 2 és 1, la suma serà 4

```xpath

/lliga/jornada/sum(./partit/equip/resultat)

```

8. Llista els jugadors que ha fet gols a tots els partits

```xpath

/lliga/jornada/partit/equip/gols/jugador

```

9. Llista els jugadors que fet gols el dia 25-12-2019?

```xpath

/lliga/jornada/partit/equip[dia="25-12-2019"]/gols/jugador

```

10. Mostra una llista de cada dia on el partit hagi acabat amb un resultat major que 2.

```xpath

/lliga/jornada/partit/equip[resultat>2]/dia

```
