{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://pastelvg.com/schema/pastelvg.schema.json",
  "title": "PastelVG",
  "type": "object",
  "required": ["pastelvg", "content"],
  "properties": {
    "pastelvg": {
      "type": "string",
      "const": "0.1"
    },
    "width": {
      "type": "number"
    },
    "height": {
      "type": "number"
    },
    "viewBox": {
      "type": "array",
      "items": { "type": "number" },
      "minItems": 4,
      "maxItems": 4
    },
    "content": {
      "type": "array",
      "items": { "$ref": "#/$defs/element" }
    }
  },
  "$defs": {
    "element": {
      "type": "object",
      "required": ["type"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["circle", "rect", "group", "text"]
        },

        // Circle
        "cx": { "type": "number" },
        "cy": { "type": "number" },
        "r": { "type": "number" },

        // Rect
        "x": { "type": "number" },
        "y": { "type": "number" },
        "width": { "type": "number" },
        "height": { "type": "number" },

        // Text
        "content": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["text"],
            "properties": {
              "text": { "type": "string" },
              "fontWeight": { "type": "string" }
            }
          }
        },
        "fontSize": { "type": "number" },

        // Fill
        "fill": { "type": "string" },

        // Stroke
        "stroke": {
          "type": "object",
          "properties": {
            "color": { "type": "string" },
            "width": { "type": "number" }
          }
        },

        // Transform
        "transform": {
          "type": "array",
          "items": [
            { "type": "string", "enum": ["translate"] },
            { "type": "number" },
            { "type": "number" }
          ],
          "minItems": 3,
          "maxItems": 3
        },

        // Group
        "children": {
          "type": "array",
          "items": { "$ref": "#/$defs/element" }
        }
      }
    }
  }
}
