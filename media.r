PR <- 3 # nolint
PT1 <- 4.1 # nolint
MT1 <- 3.7 # nolint
PT2 <- 3.8 # nolint
MT2 <- 3.7 # nolint
PJ <- 9 # nolint

regla_tres <- function(valor, perc) {
    valor * perc / 100
}
proyecto <- regla_tres(PJ, 30)
examen_practico <- regla_tres(PR, 40)
programacion <- regla_tres((PT1 + PT2) / 2, 20)
metodologias <- regla_tres((MT1 + MT2) / 2, 10)

print(proyecto + examen_practico + programacion + metodologias)