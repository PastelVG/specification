# PastelVG: `mesh3d` Domain

> The `mesh3d` domain defines 3D geometry elements — including procedural primitives, mesh operations, imported files, and image-based surfaces.

It is generated and used by tools like **Aeon3D** to define and compose 3D scenes in a fully structured, portable way.

---

## Overview

Each mesh must include:
- `"type": "mesh3d"` — indicates the 3D mesh domain
- A `kind` (e.g. `"box"`, `"extrude"`, `"import"`)
- Optional transforms, material, and modifiers

---

## Common Fields

| Field       | Type     | Required | Description |
|-------------|----------|----------|-------------|
| `id`        | string   | ✅ Yes   | Unique mesh identifier |
| `type`      | string   | ✅ Yes   | Must be `"mesh3d"` |
| `kind`      | string   | ✅ Yes   | Mesh type (primitive or operation) |
| `transform` | array    | ❌ No    | Position, rotation, scale ([see transforms](../shared/transforms.md)) |
| `material`  | object   | ❌ No    | Material/shader info ([see materials](../shared/materials.md)) |
| `modifiers` | array    | ❌ No    | Array of mesh modifiers ([see modifiers](../shared/modifiers.md)) |
| `source`    | string   | ❌ No    | For `import`, `image`, or `reference` types |
| `params`    | object   | ❌ No    | For parametric meshes (extrudes, sweeps, etc.) |

---

## 🎯 Supported `kind` Types

---

### Primitive: `box`

```json
{
  "id": "box01",
  "type": "mesh3d",
  "kind": "box",
  "params": {
    "width": 10,
    "height": 10,
    "depth": 10
  }
}
```

| Param    | Type   | Required | Description    |
| -------- | ------ | -------- | -------------- |
| `width`  | number | ✅ Yes    | Width along X  |
| `height` | number | ✅ Yes    | Height along Y |
| `depth`  | number | ✅ Yes    | Depth along Z  |


### Primitive: cylinder
```
{
  "id": "cyl01",
  "type": "mesh3d",
  "kind": "cylinder",
  "params": {
    "radius": 5,
    "height": 20,
    "segments": 32
  }
}
```

### Primitive: sphere
```
{
  "id": "sphere01",
  "type": "mesh3d",
  "kind": "sphere",
  "params": {
    "radius": 10,
    "segments": 64
  }
}

```


### Primitive: plane
```
{
  "id": "plane01",
  "type": "mesh3d",
  "kind": "plane",
  "params": {
    "width": 10,
    "height": 10,
    "segmentsX": 2,
    "segmentsY": 2
  }
}
```


### Operation: extrude
```
{
  "id": "extrude01",
  "type": "mesh3d",
  "kind": "extrude",
  "source": "shape-star",
  "params": {
    "depth": 5,
    "bevel": true,
    "bevelSize": 1
  }
}
```



### Operation: Sweep or Lathe
```
{
  "id": "roller01",
  "type": "mesh3d",
  "kind": "sweep",
  "source": "profile001",
  "params": {
    "path": "circlePath",
    "resolution": 64
  }
}
```

### Image-Based: heightmap
```
{
  "id": "terrain01",
  "type": "mesh3d",
  "kind": "heightmap",
  "source": "grayscale-image.png",
  "params": {
    "width": 100,
    "depth": 100,
    "height": 20
  }
}
```

### External: import
```
{
  "id": "importedHead",
  "type": "mesh3d",
  "kind": "import",
  "source": "models/head.obj"
}
```

### Reference: reuse
```
{
  "id": "useCube",
  "type": "mesh3d",
  "kind": "reuse",
  "source": "box01"
}
```


### Example With Material + Modifiers
```
{
  "id": "modBox",
  "type": "mesh3d",
  "kind": "box",
  "params": {
    "width": 10,
    "height": 10,
    "depth": 10
  },
  "material": {
    "color": "#FF8800",
    "roughness": 0.4
  },
  "modifiers": [
    { "kind": "subdivide", "iterations": 2 },
    { "kind": "smooth" }
  ]
}

{
  "id": "modBox",
  "type": "mesh3d",
  "kind": "box",
  "params": {
    "width": 10,
    "height": 10,
    "depth": 10
  },
  "material": {
    "color": "#FF8800",
    "roughness": 0.4
  },
  "modifiers": [
    { "kind": "subdivide", "iterations": 2 },
    { "kind": "smooth" }
  ]
}
```

🔮 Future kind Types
boolean: union, subtract, intersect
pathExtrude: path + profile sweep
meshText: 3D text as mesh
voxel: 3D voxel grid
param: procedural geometry from code
