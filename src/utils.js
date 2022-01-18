export const sortArray = (x, y) => {
    if (x.symbol < y.symbol) return -1;
    if (x.symbol > y.symbol) return 1;
    return 0;
};
