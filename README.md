# geometry2d

`geometry2d` est une bibliothèque JavaScript/TypeScript pour manipuler des objets géométriques en 2D. Elle fournit des fonctions et des classes pour travailler avec des points, des vecteurs et d'autres entités géométriques.

## Installation

Vous pouvez installer cette bibliothèque via npm :

```sh
npm install geometry2d
```

## Utilisation

Voici un exemple de base pour utiliser geometry2d :

```js
import { Point, distance } from 'geometry2d';

const pointA: Point = {x: 1, y: 2};
const pointB: Point = {x: 3, y: 4};

console.log(distance({ from: pointA, to: pointB }));
```

## Fonctionnalités
**Points** : Créez et manipulez des points en 2D.
**Vecteurs** : Travaillez avec des vecteurs pour des opérations géométriques.
**Conversions** : Convertissez entre différents formats géométriques.
