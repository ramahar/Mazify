
document.getElementById("gen")
.addEventListener('click', function () {
  setUp(); 
  initialize();
	generateMaze(randint(generatex), randint(generatey));
  mazeGenerated = true; 
  currMaze = JSON.stringify(maze);

	showProcess(30);
});

document.getElementById("dfs")
.addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp(); searchMazeWithDFS(outsetx, outsety, 30);
});

document.getElementById("bfs")
.addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp(); searchMazeWithBFS(outsetx, outsety, 300);
});

function setUp() {
	timeouts.forEach(function(t) {
		clearTimeout(t);
	});
	dumps = []; backTrack = true;
	if (mazeGenerated) maze = JSON.parse(currMaze);
}
