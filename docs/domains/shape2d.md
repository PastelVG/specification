# PastelVG: Shape2d Domain

Elements in the shape2d domain represent 2D vector graphics — including primitive shapes, paths, groups, and text — similar to SVG, but structured in JSON.

Each 2D element must include:
• "type": "shape2d" – to indicate its domain
• A kind value like "circle", "rect", etc.
• Standard properties defined below


##Common Fields

| Field       | Type             | Required | Description                                                   |
| ----------- | ---------------- | -------- | ------------------------------------------------------------- |
| `id`        | string           | ✅        | Unique identifier                                             |
| `type`      | string           | ✅        | Must be `"shape2d"`                                           |
| `kind`      | string           | ✅        | Element kind: `"circle"`, `"rect"`, etc.                      |
| `transform` | array            | ❌        | Transform list (see [transforms.md](../shared/transforms.md)) |
| `fill`      | string or object | ❌        | Fill color or gradient                                        |
| `stroke`    | object           | ❌        | Stroke settings (see [§ Stroke Object](#stroke-object))       |
| `opacity`   | number           | ❌        | 0–1 transparency                                              |


Supported Kind Types

## Circle

```
{
  "type": "shape2d",
  "kind": "circle",
  "cx": 100,
  "cy": 100,
  "r": 50,
  "fill": "red"
}
```
| Property | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| `cx`     | number | ✅        | Center X    |
| `cy`     | number | ✅        | Center Y    |
| `r`      | number | ✅        | Radius      |


## Rect

```
{
  "type": "shape2d",
  "kind": "rect",
  "x": 10,
  "y": 20,
  "width": 200,
  "height": 100,
  "fill": "lightblue"
}
```

| Property | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| `x`      | number | ✅        | Top-left X  |
| `y`      | number | ✅        | Top-left Y  |
| `width`  | number | ✅        | Width       |
| `height` | number | ✅        | Height      |


## Line

```
{
  "type": "shape2d",
  "kind": "line",
  "p1": [10, 80],
  "p2": [60, 50],
  "stroke": {
    "color": "#000",
    "width": 2
  }
}
```
| Property | Type  | Required | Description          |
| -------- | ----- | -------- | -------------------- |
| `p1`     | array | ✅        | Start point `[x, y]` |
| `p2`     | array | ✅        | End point `[x, y]`   |


## Elipse

```
{
  "type": "shape2d",
  "kind": "ellipse",
  "cx": 120,
  "cy": 60,
  "rx": 40,
  "ry": 20,
  "fill": "orange"
}
```
| Property | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| `cx`     | number | ✅        | Center X    |
| `cy`     | number | ✅        | Center Y    |
| `rx`     | number | ✅        | Radius X    |
| `ry`     | number | ✅        | Radius Y    |


##Text
```
{
  "type": "shape2d",
  "kind": "text",
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

| Property   | Type   | Required | Description          |
| ---------- | ------ | -------- | -------------------- |
| `x`, `y`   | number | ✅        | Text anchor position |
| `content`  | array  | ✅        | Text spans           |
| `fontSize` | number | ❌        | Font size            |
| `fill`     | string | ❌        | Fill color           |


##Group
Groups are containers for multiple child shapes
```
{
  "type": "shape2d",
  "kind": "group",
  "transform": [
    ["translate", 20, 30]
  ],
  "children": [
    {
      "type": "shape2d",
      "kind": "rect",
      "x": 10,
      "y": 10,
      "width": 60,
      "height": 40,
      "fill": "blue"
    }
  ]
}
```

| Property    | Type  | Required | Description               |
| ----------- | ----- | -------- | ------------------------- |
| `transform` | array | ❌        | Applied to group          |
| `children`  | array | ✅        | Nested `shape2d` elements |


##Stroke Object

```
"stroke": {
  "color": "#000",
  "width": 2,
  "lineCap": "round",
  "lineJoin": "miter",
  "miterLimit": 4,
  "dash": [4, 2],
  "dashOffset": 0
}

```
| Property     | Type   | Description                       |
| ------------ | ------ | --------------------------------- |
| `color`      | string | Stroke color                      |
| `width`      | number | Stroke width                      |
| `lineCap`    | string | `"butt"` | `"round"` | `"square"` |
| `lineJoin`   | string | `"miter"` | `"round"` | `"bevel"` |
| `miterLimit` | number | Used with `miter` joins           |
| `dash`       | array  | Dash pattern                      |
| `dashOffset` | number | Dash pattern offset               |


