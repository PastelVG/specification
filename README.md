# PastelVG Specification (v0.1)

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


# 4. Transforms
All transforms are optional and composable. Order of application: TBD (likely SVG-like: scale → rotate → translate).

```
"transform": ["translate", 20, 30]
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
  "color": "#000000",
  "width": 2
}
```


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


