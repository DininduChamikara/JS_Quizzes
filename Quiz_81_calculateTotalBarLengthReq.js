function calculateTotalBarLengthReq(gateWidth, gateHeight, rowHeightPercentage, barThickness) {
  // Calculate the length of vertical bars (columns)
  const verticalBarLength = gateHeight * 2;
  
  // Calculate the size of each row
  const rowSize = gateHeight * rowHeightPercentage * 0.01;
  
  // Calculate the number of horizontal bars (rows)
  const numOfHorizontalBars = (gateHeight / rowSize) + 1;
  
  // Calculate the length of horizontal bars
  const horizontalBarLength = (gateWidth - barThickness * 2) * numOfHorizontalBars;
  
  // Calculate the gap between rows
  const rowGap = (gateHeight - numOfHorizontalBars * barThickness) / (numOfHorizontalBars - 1);
  
  // Calculate the number of circles in a row
  const numOfCirclesInRow = gateWidth / rowGap; //this may not natural number (float value)
  
  // Calculate the number of alternate rows with circles
  const numOfRowsWithCircles = Math.floor((numOfHorizontalBars - 1) / 2);
  
  // Calculate the total number of circles
  const totalNumOfCircles = numOfCirclesInRow * numOfRowsWithCircles;
  
  // Calculate the radius of each circle
  const radius = rowGap / 2;
  
  // Calculate the circumference of each circle
  const circumference = 2 * radius * Math.PI;
  
  // Calculate the total length of iron bars required
  const totalBarLength = verticalBarLength + horizontalBarLength + circumference * totalNumOfCircles;

  return `Total bar length requirement = ${totalBarLength.toFixed(2)}cm.`;
  
}

const ironBarThickness = 10;
let answer = calculateTotalBarLengthReq(500, 500, 20, ironBarThickness);
console.log(answer);