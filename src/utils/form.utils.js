export const areFormValuesValid = (values) => {
    const areValuesValid = Object.values(values).every((value) => value);

    return areValuesValid;
};
