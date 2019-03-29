# Mazify
[Live version.](https://ramahar.github.io/Mazify)

Mazify is a Javascript browser application that visualizes maze solving and maze generating algorithms. A random maze is generated and the user can choose which algorithm to run on the maze. Traversal algorithm will then be implemented and visualized solving the maze.

![solver](./assets/solver.gif)
 
## Architecture and Technologies
- Vanilla JavaScript
- Canvas
- HTML5 + CSS3

## Features
- Implementation of graph traversing algorithms (DFS, BFS, Dijkstra etc.)
- Render path-solving algorithm on a randomly generate maze using Canvas
- Dynamically manipulate the DOM using pure Javascript
- Add maze generator to generate new random maze on every click


## Algorithms 
- BFS
- DFS
- A* Search

## Implementation
I used vanilla JS to dynamically manipulate the DOM by using event listeners to render maze-solving algorithms  

```
document.getElementById("dfs")
.addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp(); 
	searchMazeWithDFS(outsetx, outsety, 20);
});

document.getElementById("bfs")
.addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp(); 
	searchMazeWithBFS(outsetx, outsety, 25);
});
```