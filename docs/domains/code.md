# PastelVG: `code` Domain

> The `code` domain allows you to embed structured code blocks inside your PastelVG scenes — for procedural geometry, logic, UI interaction, or live coding.

These blocks may generate other elements, define reusable functions, or respond to runtime events.

---

## Overview

Code elements represent logic, scripting, or generation behavior in a scene.

Each code block must include:
- `"type": "code"`
- A `kind` to describe the language or function (e.g. `"dsl"`, `"shader"`, `"script"`)
- A `language` field (e.g. `"swift"`, `"glsl"`, `"javascript"`)
- A `code` string or code block content

---

## Common Fields

| Field      | Type   | Required | Description |
|------------|--------|----------|-------------|
| `id`       | string | ✅ Yes   | Unique identifier |
| `type`     | string | ✅ Yes   | Must be `"code"` |
| `kind`     | string | ✅ Yes   | `"dsl"` \| `"shader"` \| `"script"` |
| `language` | string | ✅ Yes   | Language specifier (e.g. `"swift"`, `"glsl"`) |
| `code`     | string | ✅ Yes   | Code content |
| `inputs`   | object | ❌ No    | Optional parameters or constants |
| `output`   | string | ❌ No    | Optional output reference (e.g. mesh ID, event) |
| `eval`     | boolean | ❌ No   | Whether to auto-evaluate this block on load |

---

## Example: Swift DSL Geometry

```json
{
  "id": "code-001",
  "type": "code",
  "kind": "dsl",
  "language": "swift",
  "code": "let base = Box(width: 10, height: 5, depth: 10).position(x: 0, y: 0, z: 0)"
}
```

### Example GLSL Shader Block

```
{
  "id": "shader-001",
  "type": "code",
  "kind": "shader",
  "language": "glsl",
  "code": "void main() { gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); }"
}
```

### Example JS Block
```
{
  "id": "script-001",
  "type": "code",
  "kind": "script",
  "language": "javascript",
  "code": "function onClick() { alert('Hello!'); }",
  "eval": false
}
```

### Example With Inputs and Output
```
{
  "id": "rollerGen",
  "type": "code",
  "kind": "dsl",
  "language": "swift",
  "code": "generateRoller(image: input.image, radius: input.radius)",
  "inputs": {
    "image": "dog.png",
    "radius": 20
  },
  "output": "mesh-roller"
}
```
** This code block dynamically generates mesh-roller, which can be referenced in the scene by other elements.

### Supported kind Values
Kind	Description
"dsl"	Custom scene or geometry DSLs (e.g. Aeon3D's Swift-like modeling syntax)
"shader"	GLSL or Metal shading language
"script"	General-purpose logic (JavaScript, Lua, etc.)
"eval"	A block that is evaluated for side effects or output
💡 These kinds may be interpreted differently depending on host environment (Aeon3D, AeonWinds, etc.)


### Future Capabilities
Code blocks generating content into defs (like templates)
Connections to events in layout
Auto-inferred inputs/outputs
Code → visual preview roundtrip
Scripting modifiers in the geometry stack


###Summary
The code domain makes PastelVG interactive, generative, and programmable.
It turns a passive scene graph into a dynamic canvas — giving creators full control, whether for procedural modeling, creative scripting, or runtime behavior.
