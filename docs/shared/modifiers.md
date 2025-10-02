# PastelVG: Shared Modifiers

> Modifiers are composable, non-destructive operations applied to elements like `mesh3d` to transform or enhance them.

They live in an element’s `modifiers` array, and are processed **after** `params` and `transform`, but **before** rendering/export.

---

## 🧩 Modifier Object Format

Each modifier is an object with:

| Field    | Type   | Required | Description |
|----------|--------|----------|-------------|
| `kind`   | string | ✅ Yes   | The modifier type (e.g. `"subdivide"`, `"bevel"`) |
| ...props | varies | ❌ No    | Parameters specific to the modifier kind |

Example:

```json
{
  "modifiers": [
    { "kind": "subdivide", "iterations": 2 },
    { "kind": "smooth" },
    { "kind": "mirror", "axis": "x" }
  ]
}
```

## Common Modifier kind Values


### subdivide
Breaks meshes into smaller faces
```
{ "kind": "subdivide", "iterations": 2 }
```

### smooth
Applies smoothing (e.g. weighted average vertex smoothing).
```
{ "kind": "smooth" }

```

### bevel
Adds bevels to sharp edges or corners.
```
{
  "kind": "bevel",
  "amount": 0.2,
  "segments": 4
}
```
{
  "kind": "bevel",
  "amount": 0.2,
  "segments": 4
}


### mirror
Mirrors the mesh across an axis
```
{ "kind": "mirror", "axis": "x" }
```
{ "kind": "mirror", "axis": "x" }


### bend
Bends mesh along an axis like a deformation
```
{
  "kind": "bend",
  "angle": 45,
  "axis": "z"
}

```
| Param   | Type   | Description           |
| ------- | ------ | --------------------- |
| `angle` | number | Bend angle in degrees |
| `axis`  | string | `"x"`, `"y"`, `"z"`   |


### decimate
Reduces polygon count while preserving shape.

```
{ "kind": "decimate", "ratio": 0.5 }
```
| Param   | Type   | Description                   |
| ------- | ------ | ----------------------------- |
| `ratio` | number | 0–1 ratio of polygons to keep |


### repeat 
Repeats the mesh in a grid
```
{
  "kind": "repeat",
  "count": [3, 2, 1],
  "spacing": [10, 10, 0]
}
```
| Param     | Type  | Description                |
| --------- | ----- | -------------------------- |
| `count`   | array | Number of copies [x, y, z] |
| `spacing` | array | Offset between copies      |

“Spacing units follow the same spatial system as your scene (typically millimeters or scene units).”


### Modifier Stack Order
Modifiers are applied in an array order, top to bottom
```
"modifiers": [
  { "kind": "subdivide", "iterations": 1 },
  { "kind": "smooth" },
  { "kind": "mirror", "axis": "y" }
]
```
- this is important when chaining - an mirrored, subdivided is not the same as subdivided mirror

  ### Future Modifiers

  | Kind      | Description                      |
| --------- | -------------------------------- |
| `twist`   | Twists the mesh like a corkscrew |
| `lattice` | Deforms mesh with a control cage |
| `noise`   | Adds random displacement         |
| `boolean` | Performs mesh unions or cuts     |
| `slice`   | Creates cross-section cutaways   |

### Summary 

Modifiers extend PastelVG’s mesh system with non-destructive, powerful geometry logic — all stackable, declarative, and artist-friendly.

Used by:
🧱 mesh3d
🌀 Possibly shape2d in the future
🔧 Creative tooling pipelines like Aeon3D
