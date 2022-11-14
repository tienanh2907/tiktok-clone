const shortNumber = (value, divisor) => {
    const integer = Math.floor(value / divisor);
    //first decimal
    const decimal = Math.floor((value % divisor) / (divisor / 10));
    return `${integer}.${decimal}`;
};

const convertNumber = (value) => {
    switch (true) {
        case value > 1e9:
            return `${shortNumber(value, 1e9)}B`;
        case value > 1e6:
            return `${shortNumber(value, 1e6)}M`;
        case value > 1e3:
            return `${shortNumber(value, 1e9)}K`;
        default:
            return value;
    }
};

export default convertNumber;
