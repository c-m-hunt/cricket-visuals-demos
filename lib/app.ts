import { TestViz } from 'cricket-visuals'

import * as d3 from 'd3'
import { convertInningsToRunsAndNOs } from './utils'


const data = [1,50,"33*",33,"25*",140,0,4]

interface ChartOptions {
  backgronudColor: string;
  foregroundColor: string;
  height: number;
  width: number;
  margin: {
    top: number; bottom: number; left: number; right: number;
  }
}

interface FormSparkOptions extends ChartOptions {
  maxRuns?: number;
}

const defaultFormSparkOptions: FormSparkOptions = {
  backgronudColor: "transparent",
  foregroundColor: "blue",
  height: 300,
  width: 800,
  margin: {
    top: 0, bottom: 0, left: 0, right: 0
  }
}

export const formSpark = (selector: string, data: Array<string|number>, options: Partial<FormSparkOptions> = {}) => {
  const convertedData = convertInningsToRunsAndNOs(data);
  const { margin, height, width, backgronudColor, foregroundColor, maxRuns } = {...defaultFormSparkOptions, ...options};

  let yExtent;
  if (maxRuns) {
    yExtent = [0, maxRuns]
  } else {
    yExtent = d3.extent(convertedData, d => d[0])
  }
  
  const y = d3.scaleLinear()
    .domain(yExtent).nice()
    .range([height - margin.bottom, margin.top])

  const x = d3.scaleLinear()
    .domain([0, convertedData.length]).nice()
    .range([margin.left, width - margin.right])

  const svg = d3.select(selector)
    .append("svg")
    .style("background-color", backgronudColor)
    .attr("viewBox", [0, 0, width, height])
  
  svg.append("g")
    .selectAll("rect")
    .data(convertedData)
    .join("rect")
      .attr("fill", d => d[1] ? d3.hsl(foregroundColor).brighter(1) : foregroundColor)
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d[0]))
      .attr("height", d => y(0) - y(d[0]))
      .attr("width", x(1) - x(0))
}



formSpark("#form_spark", data)
