# IDIOMIZE

Iidomize es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/js) de platzi

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la plabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install idiomize
```

## Uso

```
import idiomize from 'idiomize'

idiomize("Programar") // Program
idiomize("Zorro") // Zorrope
idiomize("Zarpar") // Zarppe
idiomize("abecedario") // abece-dario
idiomize("sometemos") // SoMeTeMoS
```

## Créditos
- [Antonio Daniel García Guerrero]

## Licencia

[MIT](https://opensource.org/licenses/MIT)
