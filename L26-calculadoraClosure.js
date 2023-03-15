function createCalculator() {
    let res = 0;
    return {
        add(val) { return res += val },
        subtract(val) { return res -= val },
        multiply(val) { return res *= val },
        divide(val) { return res /= val },
        clear() { return res = 0 },
        getTotal() { return res }
    }
}