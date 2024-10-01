Vertices artwork uses Three.js and Olta.js.
It allows people to interact and add their own vertices based on the touch position.
All vertices have connections from the previous to the next vertice added.

# Setup

- Open the index.html file with live server and retrieve the URL
- Create a new project on collective.olta.art with the following settings:

```
    Content Url: <Use the url from live server here>
    Collection: vertices (lowercase)
    Parameters:
        x: -10000000 to 10000000
        y: -10000000 to 10000000
        z: -10000000 to 10000000
        lineColor: 0 to 15658734
        vertexColor: 0 to 15658734
    Initial State:
        Generate 0 documents with random properties
```

Note: Important to not generate random documents since the x, y and z position values have been highly increased, in order to store vertices that were created closer. Adding random documents will add points so distant they won't be properly rendered.

# Use

- To create a new vertice, click on the + button. The cursor is gonna change to having a "+" sign, indicating a new vertice can be added. If you wish to cancel, click the button once again (the "+" sign was replaced by an "x").
- When not in create vertice mode, click and drag to rotate the screen. Scroll to zoom in/out.

# Bugs list

- Speed of line being drawn cannot be controlled. This prevents from having the camera follow it's creation, for example.
- Line's end most times don't really touch the spheres.

# To-do list

- Implement touch functions for mobile
- Test on mobile
- Make sure vertices are always created. Test creating vertices far away. Maybe prevent the user from creating vertices too far away.
- Add effects: glows, particles, etc.
- Add different camera options (reset camera to default position, toggle auto-rotation, make camera follow line creation).
- Add vertex click option (display user wallet).
- Display user created Vertices (feature from rectangles project).
- Implement playback loop (feature from rectangles project).
