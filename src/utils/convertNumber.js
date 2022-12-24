const BILLION = 1e9;
const MILLIION = 1e6;
const THOUSAND = 1e3;

const shortNumber = (value, divisor) => {
    const integer = Math.floor(value / divisor);
    //first decimal
    const decimal = Math.floor((value % divisor) / (divisor / 10));
    return decimal === 0 ? integer : `${integer}.${decimal}`;
};

const convertNumber = (value) => {
    //switch change must be true to execute
    switch (true) {
        case value > BILLION:
            return `${shortNumber(value, BILLION)}B`;
        case value > MILLIION:
            return `${shortNumber(value, MILLIION)}M`;
        case value > THOUSAND:
            return `${shortNumber(value, THOUSAND)}K`;
        default:
            return value;
    }
};

export default convertNumber;
