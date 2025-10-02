# PastelVG: Shared Materials

> The `material` object defines how an element appears — including color, shading, roughness, and (optionally) textures.

It applies to:
- ✅ `mesh3d` elements (PBR shading)
- ✅ `shape2d` elements (flat fill/stroke)
- 🔄 Future: `layout` elements for visual theming

# PastelVG: Shared Materials

> The `material` object defines how an element appears — including color, shading, roughness, and (optionally) textures.

It applies to:
- ✅ `mesh3d` elements (PBR shading)
- ✅ `shape2d` elements (flat fill/stroke)
- 🔄 Future: `layout` elements for visual theming

🔧 What Materials Do
In PastelVG, a material object is an optional styling block that:
Controls how a mesh or shape looks
Can be simple (color) or physical (PBR)
Is reusable across multiple elements
Lives inline or inside defs.materials[]
Think of it as the visual DNA of an object.

---

## 🧩 Material Fields

| Field         | Type              | Required | Description |
|---------------|-------------------|----------|-------------|
| `id`          | string            | ❌ No    | Unique ID (when in `defs`) |
| `color`       | string            | ❌ No    | Base color (e.g. `"#FF0000"` or `"blue"`) |
| `roughness`   | number (0–1)      | ❌ No    | Surface roughness (0 = glossy, 1 = matte) |
| `metalness`   | number (0–1)      | ❌ No    | How metallic the surface appears |
| `opacity`     | number (0–1)      | ❌ No    | Transparency of the material |
| `emissive`    | string or object  | ❌ No    | Light emitted from the surface |
| `texture`     | string            | ❌ No    | Path or URL to a texture image |
| `normalMap`   | string            | ❌ No    | Optional normal map (bump detail) |
| `style`       | string            | ❌ No    | `"flat"` \| `"pbr"` \| `"wireframe"` |
| `shader`      | string            | ❌ No    | Reference to a custom shader block (see `code`) |

---

## ✏️ Simple Example

```json
{
  "type": "mesh3d",
  "kind": "box",
  "material": {
    "color": "#FF6600",
    "roughness": 0.5,
    "metalness": 0.2
  }
}

---

## 🧩 Material Fields

| Field         | Type              | Required | Description |
|---------------|-------------------|----------|-------------|
| `id`          | string            | ❌ No    | Unique ID (when in `defs`) |
| `color`       | string            | ❌ No    | Base color (e.g. `"#FF0000"` or `"blue"`) |
| `roughness`   | number (0–1)      | ❌ No    | Surface roughness (0 = glossy, 1 = matte) |
| `metalness`   | number (0–1)      | ❌ No    | How metallic the surface appears |
| `opacity`     | number (0–1)      | ❌ No    | Transparency of the material |
| `emissive`    | string or object  | ❌ No    | Light emitted from the surface |
| `texture`     | string            | ❌ No    | Path or URL to a texture image |
| `normalMap`   | string            | ❌ No    | Optional normal map (bump detail) |
| `style`       | string            | ❌ No    | `"flat"` \| `"pbr"` \| `"wireframe"` |
| `shader`      | string            | ❌ No    | Reference to a custom shader block (see `code`) |

---

## ✏️ Simple Example

```json
{
  "type": "mesh3d",
  "kind": "box",
  "material": {
    "color": "#FF6600",
    "roughness": 0.5,
    "metalness": 0.2
  }
}
```

### Example: with texture
```
{
  "material": {
    "color": "#FFFFFF",
    "texture": "textures/grid.png",
    "roughness": 1.0,
    "metalness": 0.0
  }
}
```

### Example: Material in Defs
```
{
  "defs": {
    "materials": [
      {
        "id": "glassBlue",
        "color": "#00BFFF",
        "opacity": 0.3,
        "roughness": 0.05,
        "metalness": 0.1
      }
    ]
  },
  "content": [
    {
      "type": "mesh3d",
      "kind": "sphere",
      "material": "glassBlue"
    }
  ]
}
```


### Style Modes
| Style         | Description                           |
| ------------- | ------------------------------------- |
| `"flat"`      | No lighting; solid color              |
| `"pbr"`       | Uses roughness + metalness + lighting |
| `"wireframe"` | Renders as lines only (dev mode)      |



### Emissive Field
Use Emissive to make surfaces glow (for lighting affects)
```
"emissive": "#FFD700"
```
- we will support gradients and color ramps in future spec extensions

### Future Material Fields
| Field         | Description                     |
| ------------- | ------------------------------- |
| `alphaMap`    | Separate transparency control   |
| `envMap`      | Environment reflection          |
| `clearCoat`   | Gloss layer over base           |
| `uvTransform` | Scale/offset for texture coords |


### Summary
PastelVG materials are lightweight, expressive, and renderable in both 2D and 3D.
They give your scenes polish, realism, or just straight-up aesthetic vibes.
🎨 Shared across shape2d and mesh3d
📦 Extendable for future PBR-style rendering
✨ Definable inline or in defs.materials[]
