# PastelVG: Shared Defs

> The `defs` object holds **reusable definitions**: materials, animations, shapes, code, and symbols that can be referenced elsewhere in your scene.

This enables **modular, efficient documents** — without duplicating structure or logic.

Think of it as the **toolbox section** of your `.pvg.json`.

---

## 🧩 Structure

`defs` is a **top-level object** in your scene file:

```json
{
  "pastelvg": "0.1",
  "defs": {
    "materials": [ ... ],
    "animations": [ ... ],
    "shapes": [ ... ],
    "symbols": [ ... ]
  },
  "content": [ ... ]
}
```

## Supported Definition Types

### materials
```
"materials": [
  {
    "id": "glassBlue",
    "color": "#00BFFF",
    "opacity": 0.3,
    "roughness": 0.05
  }
]
```
-> usage
```
"material": "glassBlue"
```


### animations
```
"animations": [
  {
    "id": "spinZ",
    "property": "transform",
    "keyframes": [
      { "time": 0, "value": ["rotate", 0, 0, 1] },
      { "time": 1000, "value": ["rotate", 360, 0, 1] }
    ],
    "duration": 1000,
    "loop": true
  }
]

```
-> usage
```
"animation": "spinZ"

```

### symbols
```
"symbols": [
  {
    "id": "starIcon",
    "type": "shape2d",
    "kind": "group",
    "children": [ ... ]
  }
]

```
-> usage
```
{
  "type": "use",
  "source": "starIcon",
  "transform": [ ["translate", 100, 100] ]
}

```

### shapes
```
"shapes": [
  {
    "id": "profile01",
    "type": "shape2d",
    "kind": "path",
    "d": "M0,0 L10,0 L10,20 L0,20 Z"
  }
]

```
-> usage
```
{
  "type": "mesh3d",
  "kind": "extrude",
  "source": "profile01",
  "params": { "depth": 5 }
}

```


### code
```
"code": [
  {
    "id": "makeRoller",
    "kind": "dsl",
    "language": "swift",
    "code": "generateRoller(image: input.image, radius: input.radius)"
  }
]

```
-> usage
```
{
  "type": "code",
  "source": "makeRoller",
  "inputs": {
    "image": "flower.png",
    "radius": 20
  }
}

```


### Reference Summmary

| Def Type    | Stored In           | Referenced As...                |
| ----------- | ------------------- | ------------------------------- |
| `material`  | `defs.materials[]`  | `"material": "id"`              |
| `animation` | `defs.animations[]` | `"animation": "id"`             |
| `symbol`    | `defs.symbols[]`    | `type: "use"` + `source`        |
| `shape`     | `defs.shapes[]`     | `"source": "id"` in mesh ops    |
| `code`      | `defs.code[]`       | `"source": "id"` in code blocks |

