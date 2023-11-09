// Get references to the sliders and display elements
const purchasePriceSlider = document.getElementById("purchasePriceSlider");
const termsSlider = document.getElementById("termsSlider");
const numBondsSlider = document.getElementById("numBondsSlider");
const interestRateSlider = document.getElementById("interestRateSlider");

const purchasePriceValue = document.getElementById("purchasePriceValue");
const termsValue = document.getElementById("termsValue");
const numBondsValue = document.getElementById("numBondsValue");
const interestRateValue = document.getElementById("interestRateValue");

const plotDiv = document.getElementById("plot");

// Initialize plot data
const data = [{
  x: [],
  y: [],
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Total Value',
}];

// Initialize layout options for the plot
const layout = {
  title: 'Compound Interest in Bonds',
  xaxis: { title: 'Year' },
  yaxis: { title: 'Total Value' }
};

// Update the plot with new data
function updatePlot(x, y) {
  Plotly.newPlot(plotDiv, data, layout);
}

// Calculate compound interest and update the plot
function calculateCompoundInterest() {
  const purchasePrice = parseFloat(purchasePriceSlider.value);
  const terms = parseInt(termsSlider.value);
  const numBonds = parseInt(numBondsSlider.value);
  const interestRate = parseFloat(interestRateSlider.value) / 100; // Convert to decimal

  // Calculate compound interest and populate data for the plot
  data[0].x = Array.from({ length: terms + 1 }, (_, i) => i);
  data[0].y = data[0].x.map(year => {
    const principal = purchasePrice * numBonds;
    const compoundInterest = principal * Math.pow(1 + interestRate, year);
    return compoundInterest;
  });

  updatePlot(data[0].x, data[0].y);
}

// Event listeners for slider changes
purchasePriceSlider.addEventListener("input", () => {
  purchasePriceValue.textContent = purchasePriceSlider.value;
  calculateCompoundInterest();
});

termsSlider.addEventListener("input", () => {
  termsValue.textContent = termsSlider.value;
  calculateCompoundInterest();
});

numBondsSlider.addEventListener("input", () => {
  numBondsValue.textContent = numBondsSlider.value;
  calculateCompoundInterest();
});

interestRateSlider.addEventListener("input", () => {
  interestRateValue.textContent = interestRateSlider.value;
  calculateCompoundInterest();
});

// Initial calculation and plot update
calculateCompoundInterest();
