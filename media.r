PR = 3.5
PT1 = 1.96
MT1 = 3.15
PT2 = 7
MT2 = 7
PJ = 6

regla_tres <- function(valor , perc) {
    valor * perc / 100
}
proyecto = regla_tres(PJ, 30)
examen_practico = regla_tres(PR, 40)
programacion = regla_tres((PT1 + PT2)/2,20 )
metodologias = regla_tres((MT1 + MT2)/2,10 )

print(proyecto + examen_practico + programacion + metodologias) 