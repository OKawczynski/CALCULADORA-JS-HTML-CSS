function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var op = document.getElementById("op").value;
  
    var resultado;
    switch (op) {
      case "+":
        resultado = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        resultado = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        resultado = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        resultado = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        resultado = "Operação inválida";
        break;
    }
  
    document.getElementById("resultado").value = resultado;
  }
  