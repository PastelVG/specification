# PastelVG: Shape2d Domain

Elements in the shape2d domain represent 2D vector graphics — including primitive shapes, paths, groups, and text — similar to SVG, but structured in JSON.

Each 2D element must include:
• "type": "shape2d" – to indicate its domain
• A kind value like "circle", "rect", etc.
• Standard properties defined below


##Common Fields

| Field       | Type             | Required | Description                                                   |
| ----------- | ---------------- | -------- | ------------------------------------------------------------- |
| `id`        | string           | ✅ Yes        | Unique identifier                                             |
| `type`      | string           | ✅ Yes        | Must be `"shape2d"`                                           |
| `kind`      | string           | ✅ Yes       | Element kind: `"circle"`, `"rect"`, etc.                      |
| `transform` | array            | ❌ No        | Transform list (see [transforms.md](../shared/transforms.md)) |
| `fill`      | string or object | ❌ No       | Fill color or gradient                                        |
| `stroke`    | object           | ❌ No        | Stroke settings (see [§ Stroke Object](#stroke-object))       |
| `opacity`   | number           | ❌ No        | 0–1 transparency                                              |


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
| `cx`     | number | ✅ Yes        | Center X    |
| `cy`     | number | ✅ Yes        | Center Y    |
| `r`      | number | ✅ Yes        | Radius      |


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
| `x`      | number | ✅ Yes       | Top-left X  |
| `y`      | number | ✅ Yes        | Top-left Y  |
| `width`  | number | ✅ Yes        | Width       |
| `height` | number | ✅ Yes        | Height      |
| `fill`   | string | ❌ No       | Fill Color  |


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
| `p1`     | array | ✅ Yes   | Start point `[x, y]` |
| `p2`     | array | ✅ Yes   | End point `[x, y]`   |
| `stroke` | object | ❌ No   | Stroke Object   |

## Ellipse

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
| `cx`     | number | ✅ Yes       | Center X    |
| `cy`     | number | ✅ Yes        | Center Y    |
| `rx`     | number | ✅ Yes        | Radius X    |
| `ry`     | number | ✅ Yes        | Radius Y    |
| `fill`   | string | ❌ No       | Fill Color  |
| `stroke` | object | ❌ No   | Stroke Object   |


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
| `x`, `y`   | number | ✅ Yes        | Text anchor position |
| `content`  | array  | ✅ Yes        | Text spans           |
| `fontSize` | number | ❌ No        | Font size            |
| `fill`     | string | ❌ No        | Fill color           |
| `fill`     | string | ❌ No       | Fill Color  |
| `stroke`   | object | ❌ No   | Stroke Object   |


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
| `transform` | array | ❌ No        | Applied to group          |
| `children`  | array | ✅ Yes        | Nested `shape2d` elements |


##Styling
###Stroke Object
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
| Property     | Type   | Description                       |
| ------------ | ------ | --------------------------------- |
| `color`      | string | Stroke color                      |
| `width`      | number | Stroke width                      |
| `lineCap`    | string | `"butt"` | `"round"` | `"square"` |
| `lineJoin`   | string | `"miter"` | `"round"` | `"bevel"` |
| `miterLimit` | number | Used with `miter` joins           |
| `dash`       | array  | Dash pattern                      |
| `dashOffset` | number | Dash pattern offset               |
Only color+width are commonly used; others are optional

