import json

alumnos = {"clase": [{"alumno": "samuele", "programacion": "7", "FOL": "6", "Educacion Fisica": "4"},
           {"alumno": "Falopio", "programacion": "4", "FOL": "7", "Educacion Fisica": "2"},
           {"alumno": "caballo", "programacion": "8", "FOL": "7", "Educacion Fisica": "8"}]}

with open("alumnos.json", "w") as studente:
    json.dump(alumnos, studente, indent=4)

print("Codigo copiado , codigo controlado")
