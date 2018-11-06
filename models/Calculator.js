function Calculator (leftOperand, operator, rightOperand) {

    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;

    this.calculateResults = function () {

        let result = 0;

        switch (this.operator) {
            case "+":
                result = this.leftOperand + this.rightOperand;
                break;
            case "-":
                result = this.leftOperand - this.rightOperand;
                break;
            case "*":
                result = this.leftOperand * this.rightOperand;
                break;
            case "/":
                result = this.leftOperand / this.rightOperand;
                break;
            case "%":
                result = (this.leftOperand / 100) * this.rightOperand;
                break;
            case "^":
                result = Math.pow(this.leftOperand, this.rightOperand);
        }
        return result;
    }
}

module.exports = Calculator;