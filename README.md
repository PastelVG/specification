# specification
The PastelVG Specification: A JSON-based vector graphics format.

The PastelVG Specification - Version 0.1
A minimal, JSON-based format for describing 2D vector graphics scenes.

# 1. Introduction

PastelVG is a declarative format for representing vector graphics using JSON. It is designed to be easier to read, write, and generate programmatically than XML-based formats like SVG.

A valid PastelVG document is a JSON object.

# 2. The Root Object

The root object defines the canvas and contains an array of graphic elements.

Property	Type	Description	Required
pastelvg	string	The version of the PastelVG spec used.	Yes
width	number	The width of the canvas.	No
height	number	The height of the canvas.	No
viewBox	[number, number, number, number]	The viewbox of the canvas, as an array of four numbers [min-x, min-y, width, height].	No
content	array	An array of graphic elements (objects) to render.	Yes
Note: Either width/height or viewBox should be provided. If only width/height are provided, the viewBox is assumed to be [0, 0, width, height].

# 3. Graphic Elements

Graphic elements are defined by objects within the content array (or a group's children array). Each element must have a type property.

# 3.1. Circle (type: "circle")

Property	Type	Description	Required
cx	number	The x-coordinate of the circle's center.	Yes
cy	number	The y-coordinate of the circle's center.	Yes
r	number	The radius of the circle.	Yes
fill	string	The fill color of the circle (e.g., "red", "#FF0000").	No
# 3.2. Rectangle (type: "rect")

Property	Type	Description	Required
x	number	The x-coordinate of the top-left corner.	Yes
y	number	The y-coordinate of the top-left corner.	Yes
width	number	The width of the rectangle.	Yes
height	number	The height of the rectangle.	Yes
fill	string	The fill color of the rectangle.	No
# 3.3. Group (type: "group")

A group is a container element used to apply transformations to a set of elements.

Property	Type	Description	Required
id	string	A unique name for the group.	No
transform	array	An array defining a transformation. See §4.1.	No
children	array	An array of graphic elements belonging to this group.	Yes
$ #4. Styling and Transformations

#4.1. Transformations

The transform property is an array where the first element is the transform type and subsequent elements are its parameters.

Transform	Array Format	Description
translate	["translate", tx, ty]	Move the element by tx pixels horizontally and ty pixels vertically.
Note: Future versions will support rotate, scale, and matrix.

# 4.2. Basic Styling

Property	Type	Description
fill	string	A CSS color string defining the interior color of a shape.
stroke	object	An object defining the stroke (outline). See below.
Stroke Object

Property	Type	Description
width	number	The width of the stroke in pixels.
color	string	A CSS color string for the stroke.
Note: Future versions will support dasharray, linecap, etc.

# 5. Example

A valid PastelVG v0.1 document:

json
{
  "pastelvg": "1.0",
  "width": 200,
  "height": 200,
  "content": [
    {
      "type": "circle",
      "cx": 100,
      "cy": 100,
      "r": 50,
      "fill": "red"
    }
  ]
}

# 6. Future Considerations

This is a minimal v0.1 specification. The following features are planned for future versions:

Path element (type: "path")
Text element
Gradients and patterns
Additional transformations (rotate, scale, skew)
Clipping paths and masks
More complex stroke and fill properties
