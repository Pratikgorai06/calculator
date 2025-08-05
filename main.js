const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "AC") {
      expression = "";
      output.innerText = "0";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      output.innerText = expression || "0";
    } else if (value === "=") {
      try {
        const result = eval(
          expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-")
        );
        output.innerText = result;
        expression = result.toString();
      } catch {
        output.innerText = "Error";
        expression = "";
      }
    } else if (value === "+/-") {
      // Toggle sign of current number
      if (expression) {
        if (expression.startsWith("-")) {
          expression = expression.slice(1);
        } else {
          expression = "-" + expression;
        }
        output.innerText = expression;
      }
    } else {
      expression += value;
      output.innerText = expression;
    }
  });
});
