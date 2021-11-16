'use strict';
import checkMac from "./mac";
import checkVisa from "./visa";
import checkIP from "./ip";

const checker = {
    rules: {
        checkMac, 
        checkVisa, 
        checkIP
    },
    validate(text, type){
        switch(type){
            case 'ip':
                return this.rules.checkIP(text);
                break;
            case 'mac':
                    return this.rules.checkMac(text);
                    break;
            case 'visa':
                return this.rules.checkVisa(text);
                break;
        }
    }
};

export default checker;