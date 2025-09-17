# PastelVG Specification
---

## 1. Overview

**PastelVG** is a declarative, minimal vector graphics format based on JSON.  
It is designed to be predictable, portable, and human-readable — a simplified alternative to SVG for modern 2D graphics rendering.

> PastelVG is intended for educational tools, visual editors, creative coding, and interoperability with SVG-based workflows.

---

## 2. Root Object

Each `.pvg.json` file contains a single JSON object with the following properties:

| Property     | Type     | Required | Description |
|--------------|----------|----------|-------------|
| `pastelvg`   | string   | ✅        | Format version (e.g., `"0.1"`) |
| `id`         | string   | ✅        | Unique identifier for the document |
| `name`       | string   | ❌        | Human-readable name |
| `width`      | number   | ❌        | Canvas width |
| `height`     | number   | ❌        | Canvas height |
| `viewBox`    | array    | ❌        | `[minX, minY, width, height]` — overrides width/height if set |
| `content`    | array    | ✅        | Array of elements (see below) |

---

## 3. Elements

All elements in `content` or `children` must include a `type` property.  
Each type defines its own expected properties.

Supported types:

- `circle`
- `rect`
- `line`
- `ellipse`
- `text`
- `group`

---

### 3.1 Circle

```json
{
  "type": "circle",
  "cx": 100,
  "cy": 100,
  "r": 50,
  "fill": "red"
}


# PastelVG Specification (v0.1)

## License

PastelVG is licensed under the [Apache License 2.0](./LICENSE).

You are free to use, modify, and distribute this specification and its associated tools, even in commercial projects. No warranties are provided. See the LICENSE file for full details.

Copyright © 2025 Aeon Development Group.


> A minimal, JSON-based format for describing 2D vector graphics scenes.
> 
---

## 1. Introduction

PastelVG is a declarative JSON format designed for learning, teaching, and building vector graphics in a structured, intuitive way.

### Goals

- **Simplicity** – Easy to write, easy to teach.
- **Structure** – JSON-native, predictable, and composable.
- **Portability** – Designed to render across platforms (web, native, CLI).
- **Interoperability** – Converts easily to/from SVG.

---


## 2. File Structure | Root Object

A PastelVG file is a single JSON object with the following top-level properties.

| Property    | Type     | Description                                                                 | Required |
|-------------|----------|-----------------------------------------------------------------------------|----------|
| `pastelvg`  | string   | The spec version used (e.g., `"0.1"`).                                      | ✅ Yes   |
| `id`        | string   | id can be a string or number                                                | ✅ Yes   |
| `name`      | string   | the name of the file                                                        | ❌ No    |
| `width`     | number   | Canvas width in pixels.                                                     | ❌ No    |
| `height`    | number   | Canvas height in pixels.                                                    | ❌ No    |
| `viewBox`   | array    | `[x, y, width, height]` used to define coordinate space.                    | ❌ No    |
| `content`   | array    | An array of visual elements (shapes, groups, etc.).                         | ✅ Yes   |

> Note: Either `width`/`height` or `viewBox` must be provided. If only `width` and `height` are provided, the `viewBox` is assumed to be `[0, 0, width, height]`.

---

# 3. Core Elements
Each item in content is an object with a type field. Supported types:

## 3.1 circle
```
{
  "type": "circle",
  "cx": 100,
  "cy": 100,
  "r": 40,
  "fill": "red",
  "stroke": { "color": "black", "width": 2 }
}
```

| Property | Type   | Description                                   | Required |
| -------- | ------ | --------------------------------------------- | -------- |
| `cx`     | number | X-coordinate of center                        | ✅ Yes    |
| `cy`     | number | Y-coordinate of center                        | ✅ Yes    |
| `r`      | number | Radius                                        | ✅ Yes    |
| `fill`   | string | Fill color (e.g., `"red"`, `"#FF0000"`)       | ❌ No     |
| `stroke` | object | Stroke object (see [§5.1](#51-stroke-object)) | ❌ No     |

## 3.2 rect
```
{
  "type": "rect",
  "x": 10,
  "y": 20,
  "width": 200,
  "height": 100,
  "fill": "lightblue"
}
```
| Property | Type   | Description          | Required |
| -------- | ------ | -------------------- | -------- |
| `x`      | number | X of top-left corner | ✅ Yes    |
| `y`      | number | Y of top-left corner | ✅ Yes    |
| `width`  | number | Width in pixels      | ✅ Yes    |
| `height` | number | Height in pixels     | ✅ Yes    |
| `fill`   | string | Fill color           | ❌ No     |



## 3.3 group
```
{
  "type": "group",
  "transform": { "translate": [20, 30] },
  "children": [ ... ]
}
```

| Property    | Type  | Description                                         | Required |
| ----------- | ----- | --------------------------------------------------- | -------- |
| `transform` | array | Array-formatted transform (see [§4](#4-transforms)) | ❌ No     |
| `children`  | array | Array of nested graphic elements                    | ✅ Yes    |



## 3.4 text
```
{
  "type": "text",
  "x": 100,
  "y": 200,
  "content": [
    { "text": "Hello ", "fontWeight": "normal" },
    { "text": "world", "fontWeight": "bold" }
  ],
  "fontSize": 18,
  "fill": "black"
}
```

| Property   | Type   | Description                        | Required |
| ---------- | ------ | ---------------------------------- | -------- |
| `x`, `y`   | number | Position of text baseline          | ✅ Yes    |
| `content`  | array  | Array of spans with `text` + style | ✅ Yes    |
| `fontSize` | number | Font size in pixels                | ❌ No     |
| `fill`     | string | Fill color                         | ❌ No     |


## 3.5 ellipse
```
  "type": "ellipse",
  "cx": 120,
  "cy": 60,
  "rx": 40,
  "ry": 20,
  "fill": "orange",
  "stroke": { "color": "black", "width": 2 }
```

| Property | Type   | Description                                   | Required |
| -------- | ------ | --------------------------------------------- | -------- |
| `cx`     | number | X-coordinate of center                        | ✅ Yes    |
| `cy`     | number | Y-coordinate of center                        | ✅ Yes    |
| `rx`     | number | Radius                                        | ✅ Yes    |
| `ry`     | number | Radius                                        | ✅ Yes    |
| `fill`   | string | Fill color (e.g., `"red"`, `"#FF0000"`)       | ❌ No     |
| `stroke` | object | Stroke object (see [§5.1](#51-stroke-object)) | ❌ No     |

## 3.6 line
```
{
"type": "line",
"id": "ln-1",
"p1": [10, 80],
"p2": [60, 50],
"stroke": {
 "color": "#000",
"width": 2
}
 }

```

| Property | Type   | Description                                   | Required |
| -------- | ------ | --------------------------------------------- | -------- |
| `p1`     | number | point                       | ✅ Yes    |
| `p2`     | number | point                       | ✅ Yes    |
| `stroke` | object | Stroke object (see [§5.1](#51-stroke-object)) | ❌ No     |



# 4. Transforms
All transforms are optional and composable. Order of application: TBD (likely SVG-like: scale → rotate → translate).

```
"transform": [
  ["translate", 10, 20],
  ["scale", 2],
  ["rotate", 45, 100, 100],
  ["skewX", 10],
  ["skewY", -5]
]
```

Future versions may support:
["rotate", angle]
["scale", sx, sy]
["matrix", a, b, c, d, e, f]

# 5. Styling
- `fill`: `"red"` or gradient object
- `stroke`: object with `color` / `width` / `dash`
- `opacity`: 0.0–1.0

% 5.1 Stroke Object
```
"stroke": {
  "color": "#000",
  "width": 2,
  "lineCap": "butt",       // "butt" | "round" | "square"
  "lineJoin": "miter",     // "miter" | "round" | "bevel"
  "miterLimit": 4,
  "dash": [4, 2],          // pattern
  "dashOffset": 0
}
```
Only color+width are commonly used; others are optional

| Property | Type   | Description            |
| -------- | ------ | ---------------------- |
| `color`  | string | Stroke color           |
| `width`  | number | Stroke width in pixels |


# 6. Full Example
## 🔍 A Minimal PastelVG Scene

```json
{
  "pastelvg": "0.1",
  "width": 200,
  "height": 200,
  "content": [
    {
      "type": "circle",
      "cx": 100,
      "cy": 100,
      "r": 50,
      "fill": "red"
    },
    {
      "type": "group",
      "transform": ["translate", 20, 30],
      "children": [
        {
          "type": "rect",
          "x": 10,
          "y": 10,
          "width": 60,
          "height": 40,
          "fill": "blue"
        }
      ]
    }
  ]
}
```

# 7. Future Considerations
- Path elements (SVG-style `d` syntax)
- Image embedding (via data URI or path)
- Gradients (linearGradient, radialGradient)
- Reusable symbols / templates
- Accessibility attributes

# 8. Glossary

**Element** – A visual object on the canvas (e.g., a circle, rectangle, group).

**Transform** – A mathematical operation (e.g., translate, rotate) applied to an element.

**Scene** – The entire canvas of visual elements.

**Group** – A container element that applies transforms or styles to multiple child elements.


PastelVG is licensed under the [Apache License 2.0](./LICENSE).  
Copyright © 2025 Aeon Development Group.
