PR = 2
PT1 = 7.04
MT1 = 6.51
PT2 = 8.54
MT2 = 7.52
PJ = 6.5

regla_tres <- function(valor , perc) {
    valor * perc / 100
}
proyecto = regla_tres(PJ, 30)
examen_practico = regla_tres(PR, 40)
programacion = regla_tres((PT1 + PT2)/2,20 )
metodologias = regla_tres((MT1 + MT2)/2,10 )

print(proyecto + examen_practico + programacion + metodologias) 