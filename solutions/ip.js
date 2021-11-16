'use strict';

const checkIP = (ipNumbers) => {
    //const pattern = /^(\d{1,3}\.){3}(\d{1,3}){1}$/;
    const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipNumbers.match(pattern) ? true : false;
};

export default checkIP;