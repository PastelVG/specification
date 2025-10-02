# PastelVG: Shared Transforms

> Transforms allow you to move, scale, rotate, or skew elements in 2D or 3D space.

They are applied in **array order**, meaning each transform stacks on top of the previous one.

---

## 📦 Format

A `transform` is an array of transform commands:

```json
"transform": [
  ["translate", 10, 20],
  ["scale", 2],
  ["rotate", 45]
]
```

Each entry is an array: the first item is the transform kind, followed by its parameters.

## Supported Transform Types

| Kind        | Parameters                             | Description                                             |
| ----------- | -------------------------------------- | ------------------------------------------------------- |
| `translate` | x, y, (z)                              | Moves the element in space                              |
| `scale`     | scale | sx, sy | sx, sy, sz            | Scales the element uniformly or per-axis                |
| `rotate`    | angle | angle, cx, cy | angle, x, y, z | Rotates in 2D or 3D                                     |
| `skewX`     | angle                                  | Skews along the X axis                                  |
| `skewY`     | angle                                  | Skews along the Y axis                                  |
| `matrix`    | [a, b, c, d, e, f]                     | Raw 2D matrix transform (SVG-style)                     |
| `lookAt`    | from[x,y,z], to[x,y,z]                 | 3D "look at" orientation                                |
| `origin`    | x, y, z                                | Optional: re-anchors transform origin (used internally) |


### translate
```
["translate", 10, 20] // 2D
["translate", 10, 20, 30] // 3D
```

### scale
```
["scale", 2]               // Uniform
["scale", 2, 1.5]          // Non-uniform 2D
["scale", 1, 2, 3]         // 3D scale
```

### rotate
```
["rotate", 45]                        // 2D rotate around origin
["rotate", 90, 100, 100]              // 2D rotate around point (cx, cy)
["rotate", 90, 0, 1, 0]               // 3D rotate around axis
```

### skewX and skewY
```
["skewX", 20]
["skewY", -15]
```


### matrix
```
["matrix", 1, 0, 0, 1, 20, 10]
```

SVG Style 2D transformation matrix
```
[a, b, c, d, e, f] maps to:

| a c e |
| b d f |
| 0 0 1 |

```


### lookAt
```
["lookAt", [0,0,0], [10,0,0]]
```

Orients an object to face another point.  Use for cameras, lights, etc

### origin


### Order Of Operations
```
"transform": [
  ["translate", 10, 0],
  ["rotate", 90],
  ["scale", 2]
]
```
this means:  1. translate 2. then rotate 3.  then scale the result

Common usage tips

1.  groups can apply transforms to multiple children
2.  meshes often use 3d transform versions
3.  aymbols can be instanced at different locations / sizes
4.  animations can target transformative properties

   ### Future Ideas
   | Proposal   | Use Case                         |
| ---------- | -------------------------------- |
| `pivot`    | Set origin for rotation/scale    |
| `alignTo`  | Auto-alignment helper            |
| `gridSnap` | Visual editor hint for placement |


## Summary
Transforms give precise control over spatial layout - across 2d and 3d domains.  They are:

1.  compact
2.  composable
3.  interpreter-friendly
4.  easy to author by hand
5.  
