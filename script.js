const svgCanvas = d3.select("svg").append("g");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const update = (data) => {

let datedGroup = svgCanvas.selectAll("circle").data(data);

datedGroup
  .enter()
  .append("circle")
  .attr("r", 0)
  .attr("cx", (d, i) => i * 30+40)
  .attr("cy", 0);

datedGroup
  .transition()
  .duration(300)
  .attr("r", (d) => d)
  .attr("cx", (d, i) => i * 30 + 40)
  .attr("cy", 50);

datedGroup.exit().transition().duration(300).attr('r', 0)

}

const getNewData = (function(){
  let data = new Array(30).fill().map(() => getRandomInt(1,15));
  update(data);
  return () => {
    const indexToRemove =  getRandomInt(0, data.length);
    console.log('Index to remove: ' + indexToRemove);
      data.splice(indexToRemove, 1);
      return data;
  }
})();

const removeRandom = () => {

  update(getNewData())

}
