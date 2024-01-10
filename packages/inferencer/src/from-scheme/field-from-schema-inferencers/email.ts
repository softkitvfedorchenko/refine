import { FieldInferencer } from '../types';

const emailSuffixRegexp = /(email)(\[\])?$/;

export const emailInfer: FieldInferencer = (key, props) => {
    const isEmailField = emailSuffixRegexp.test(key);

    if (isEmailField) {
        return {
            key,
            type: 'email',
        };
    }

    return false;
};
