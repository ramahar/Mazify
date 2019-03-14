function canvasFoundDraw(node, ctx){
  const size = 5;
  ctx.fillStyle = `red`;
  if (node.type === "wall") ctx.fillStyle = 'black';
  ctx.fillRect(node.x * size,node.y * size, size, size);
}

export default canvasFoundDraw;
