function add(a, b) {
    return a + b;
}
function calculate(a, b, calc) {
    return calc(a, b);
}
calculate(2, 3, add);
