// Pure function to calculate power
function calculatePower(
  airflowVelocity: number,
  crossSectionalArea: number,
  airDensity: number,
  motorEfficiency: number
): number {
  const power =
    (0.5 * airDensity * crossSectionalArea * Math.pow(airflowVelocity, 3)) /
    motorEfficiency;
  return power;
}

// Update the power display
function updatePowerDisplay(power: number): void {
  document.getElementById("requiredPower").textContent =
    power.toFixed(2) + " Watts";
}

// Add event listeners for input changes
function addInputListeners(inputId: string, valueId: string): void {
  const input = document.getElementById(inputId) as HTMLInputElement;
  const value = document.getElementById(valueId);

  input.addEventListener("input", () => {
    value.textContent = input.value;
    const airflowVelocity = +document.getElementById("airflowVelocity").value;
    const crossSectionalArea = +document.getElementById("crossSectionalArea")
      .value;
    const airDensity = +document.getElementById("airDensity").value;
    const motorEfficiency =
      +document.getElementById("motorEfficiency").value / 100;

    const power = calculatePower(
      airflowVelocity,
      crossSectionalArea,
      airDensity,
      motorEfficiency
    );
    updatePowerDisplay(power);
  });
}

// Add event listeners for all input sliders
addInputListeners("airflowVelocity", "airflowVelocityValue");
addInputListeners("crossSectionalArea", "crossSectionalAreaValue");
addInputListeners("airDensity", "airDensityValue");
addInputListeners("motorEfficiency", "motorEfficiencyValue");

// Initial calculation
const initialAirflowVelocity = +document.getElementById("airflowVelocity")
  .value;
const initialCrossSectionalArea = +document.getElementById("crossSectionalArea")
  .value;
const initialAirDensity = +document.getElementById("airDensity").value;
const initialMotorEfficiency =
  +document.getElementById("motorEfficiency").value / 100;

const initialPower = calculatePower(
  initialAirflowVelocity,
  initialCrossSectionalArea,
  initialAirDensity,
  initialMotorEfficiency
);

updatePowerDisplay(initialPower);
