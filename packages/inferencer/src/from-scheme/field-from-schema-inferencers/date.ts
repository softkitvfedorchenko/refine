import dayjs from "dayjs";
import { FieldInferencer } from '../types';

const dateSuffixRegexp = /(_at|_on|At|On|AT|ON)(\[\])?$/;

export const dateInfer: FieldInferencer = (key, props) => {
    const isDateField = dateSuffixRegexp.test(key);

    //@ts-ignore
    if (isDateField || props.format === 'date-time') {
        return {
            key,
            type: 'date',
        };
    }

    return false;
};
