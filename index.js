/* eslint-disable no-undef */

	const generate = document.getElementById("gen");
	generate.addEventListener('click', function () {
  setUp(); 
  initialize();
	generateMaze(randint(generatex), randint(generatey));
  mazeGenerated = true; 
	currMaze = JSON.stringify(maze);
	
	showProcess(15);
});

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

function setUp() {
	timeouts.forEach(function(t) {
		clearTimeout(t);
	});
  result = []; 
  backTrack = true;
	if (mazeGenerated) maze = JSON.parse(currMaze);
}
