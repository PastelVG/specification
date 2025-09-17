# PastelVG Specification

**Version:** 0.1  
**Status:** Draft  
**Maintainer:** [PastelVG Org](https://github.com/pastelvg)  
**License:** [Apache 2.0](./LICENSE)

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
