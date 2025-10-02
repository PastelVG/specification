## 1. Introduction

**PastelVG** is an extensible creative document format based on JSON.  
It is designed to be predictable, portable, and human-readable — a simplified alternative to multiple formats for modern 2D graphics rendering.

PastelVG is a declarative JSON format designed for learning, teaching, and building a variety graphics in a structured, intuitive way.


It is **human-readable**, **machine-parseable**, and **domain-aware** — meaning it supports multiple creative disciplines
(such as 2D shapes, 3D meshes, layout elements, and code blocks) inside the same unified scene graph.

PastelVG is the native format used across the **Aeon Development Suite of Tools**, including:

- 🎨 **The Nice Slice** – A 2D vector editor with live SVG + PastelVG output
- 🧱 **Aeon3D** – Native 3D modeling and procedural mesh generation
- 🌐 **Aeon Winds** – A UI builder for creating CSS/HTML-native interfaces

```

## 2. Core Format

Each `.pvg.json` file contains a single JSON object with the following properties:


| Property        | Type                      | Required | Description                                     |
|-----------------|---------------------------|----------|-------------------------------------------------|
| `pastelvg`      | `string`                  | ✅       | Spec version (e.g. `"0.2"`)                     |
| `domain`        | `string`                  | ✅       | `"2d"`, `"3d"`, `"layout"`, or `"mixed"`        |
| `kind`          | `string`                  | ✅       | More specific document type (e.g. `"aeon3d-scene"`) |
| `id`            | `string`                  | ✅       | Unique ID                                       |
| `name`          | `string`                  | ❌       | Human-friendly label                            |
| `width`         | `number`                  | ❌       | Viewport or canvas dimensions                   |
| `height`        | `number`                  | ❌       | Viewport or canvas dimensions                   |
| `viewBox`       | `array [x, y, w, h]`      | ❌       | Overrides canvas size                           |
| `defs`          | `object`                  | ❌       | Reusable definitions (symbols, shapes, materials) |
| `content`       | `array`                   | ✅       | List of scene elements                          |
| `meta`          | `object`                  | ❌       | Author, version, timestamp, etc.                |



## 3. Scene Elements
All entries in content or children must include a type (domain) and kind (subtype).

| Field       | Type   | Description                                                              |
| ----------- | ------ | ------------------------------------------------------------------------ |
| `id`        | string | Unique within document                                                   |
| `type`      | string | `"shape2d"`, `"mesh3d"`, `"layout"`, `"code"`                            |
| `kind`      | string | Subtype (e.g. `"circle"`, `"extrusion"`, `"html-box"`)                   |
| `transform` | array  | Optional transform array (see [transforms.md](./shared/transforms.md))   |
| `material`  | object | Optional material definition (see [materials.md](./shared/materials.md)) |
| `modifiers` | array  | Optional geometry stack (see [modifiers.md](./shared/modifiers.md))      |
| `animation` | object | Optional animation data (see [animation.md](./shared/animation.md))      |


## 4. Domains
PastelVG elements are grouped by domain.
Each domain has its own supported kind values, expected fields, and rendering rules.

| Domain    | File                               | Description                              |
| --------- | ---------------------------------- | ---------------------------------------- |
| `shape2d` | [shape2d.md](./domains/shape2d.md) | SVG-like vector elements                 |
| `mesh3d`  | [mesh3d.md](./domains/mesh3d.md)   | Primitives, extrusions, surface modeling |
| `layout`  | [layout.md](./domains/layout.md)   | HTML/CSS-style block and UI structures   |
| `code`    | [code.md](./domains/code.md)       | Code blocks (Swift, DSL, shaders)        |

## 4. Definitions
You may define reusable named objects under defs, including:
🔧 Named shapes (e.g. "circleLarge")
🧱 Mesh templates
🎨 Shared materials
💡 Symbols for layout/UI
future; defs.md


### Example: Mixed Scene
{
  "pastelvg": "0.2",
  "domain": "mixed",
  "kind": "demo",
  "width": 800,
  "height": 600,
  "content": [
    {
      "id": "circle-01",
      "type": "shape2d",
      "kind": "circle",
      "cx": 100,
      "cy": 100,
      "r": 50,
      "fill": "red"
    },
    {
      "id": "roller-001",
      "type": "mesh3d",
      "kind": "lithopane",
      "source": {
        "image": "dog.png",
        "maxHeight": 3,
        "scale": 0.1,
        "cylinderRadius": 25
      }
    },
    {
      "id": "hero-panel",
      "type": "layout",
      "kind": "html-box",
      "style": {
        "width": "200px",
        "background": "#eee"
      },
      "content": "Hello from AeonWinds"
    }
  ]
}


## License

PastelVG is licensed under the [Apache License 2.0](../LICENSE).

You are free to use, modify, and distribute this specification and its associated tools, including in commercial and non-commercial projects.

No warranties are provided. See the LICENSE file for full legal terms.

Created by **R. Leah OShell** and the Aeon Development Group.

