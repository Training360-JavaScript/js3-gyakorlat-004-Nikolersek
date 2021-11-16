'use strict';

const checkVisa = (cardNumber) => {
    const pattern = /^[4](\d{3})(\d{4}){3}$/;
    return cardNumber.match(pattern) ? true : false;
};

export default checkVisa;