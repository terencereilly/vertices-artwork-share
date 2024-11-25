Vertices artwork uses Three.js and Olta.js.
It allows people to interact and add their own vertices based on the touch position.
All vertices have connections from the previous to the next vertice added.

# Setup

- Open the index.html file with live server and retrieve the URL
- Create a new project on collective.olta.art with the following settings:

```
    Initial State:
        Generate 0 documents with random properties
```

Note: Important to not generate random documents since the x, y and z position values have been highly increased, in order to store vertices that were created closer. Adding random documents will add points so distant they won't be properly rendered.

# Use

- To create a new vertice, click on the + button. The cursor is gonna change to having a "+" sign, indicating a new vertice can be added. If you wish to cancel, click the button once again (the "+" sign was replaced by an "x").
- When not in create vertice mode, click and drag to rotate the screen. Scroll to zoom in/out.
