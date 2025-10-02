# PastelVG: Shared Animation

> Animation in PastelVG allows elements to move, change, or respond over time using declarative motion data.

Animations can be:
- Timed transitions (like `"fade"` or `"move"`)
- Reusable keyframe blocks
- Applied to elements by ID or embedded directly
- Triggered manually or on events (e.g. `onHover`)

---

## Overview

There are two ways to use animation in PastelVG:

1. **Inline**: Directly on an element  
2. **Referenced**: Using a reusable `defs.animation` block

Each animation object includes:
- Targeted property (like `"transform"`, `"opacity"`, etc.)
- Timing (`duration`, `delay`, `easing`)
- Keyframes or "from/to" data

---

## 🧩 Animation Fields

| Field       | Type        | Required | Description |
|-------------|-------------|----------|-------------|
| `id`        | string      | ✅ for defs | Unique ID for referencing |
| `property`  | string      | ✅ Yes   | What to animate (`"transform"`, `"opacity"`, etc.) |
| `from`      | any         | ❌ No    | Starting value (optional if using keyframes) |
| `to`        | any         | ❌ No    | Ending value (optional if using keyframes) |
| `keyframes` | array       | ❌ No    | Array of `{ time, value }` pairs |
| `duration`  | number      | ✅ Yes   | Total animation time (in milliseconds) |
| `delay`     | number      | ❌ No    | Start delay (ms) |
| `easing`    | string      | ❌ No    | `"linear"`, `"ease-in"`, `"ease-out"`, etc. |
| `loop`      | boolean     | ❌ No    | Whether to repeat |
| `trigger`   | string      | ❌ No    | `"auto"` (on load) \| `"hover"` \| `"click"` |

---

## ✏️ Inline Example: Fade In

```json
{
  "type": "shape2d",
  "kind": "circle",
  "cx": 100,
  "cy": 100,
  "r": 40,
  "fill": "blue",
  "animation": {
    "property": "opacity",
    "from": 0,
    "to": 1,
    "duration": 1000,
    "easing": "ease-in"
  }
}
```

### Reusable Animation in Defs
```
{
  "defs": {
    "animations": [
      {
        "id": "spin360",
        "property": "transform",
        "keyframes": [
          { "time": 0, "value": ["rotate", 0, 0, 1] },
          { "time": 1000, "value": ["rotate", 360, 0, 1] }
        ],
        "duration": 1000,
        "loop": true
      }
    ]
  },
  "content": [
    {
      "type": "mesh3d",
      "kind": "box",
      "animation": "spin360"
    }
  ]
}
```

### Supported Property Values
| Property       | Description                                     |
| -------------- | ----------------------------------------------- |
| `transform`    | Applies to rotation, translation, scaling       |
| `opacity`      | For fade in/out                                 |
| `fill`         | For color transitions (e.g. `"red"` → `"blue"`) |
| `stroke.color` | For outlines                                    |
| `position`     | Alias for `transform: translate`                |
| `custom.*`     | User-defined — resolved at runtime              |



### Event Based Triggers

| Trigger    | Description                             |
| ---------- | --------------------------------------- |
| `"auto"`   | Starts when element loads               |
| `"hover"`  | On mouse hover                          |
| `"click"`  | On tap or click                         |
| `"manual"` | Only runs when triggered via code or UI |


### SUMMARY 
Animation gives motion and personality to your creative scenes.
Whether fading in 2D shapes, spinning 3D objects, or bouncing layout components — PastelVG lets you declaratively define movement across all domains.
🎞️ Easy inline syntax
🔁 Reusable animation defs
✨ Cross-domain compatibility

