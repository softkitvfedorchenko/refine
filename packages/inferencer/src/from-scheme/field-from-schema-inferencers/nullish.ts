import { FieldInferencer } from '../types';

export const nullishInfer: FieldInferencer = (key, props) => {
    if (props.nullable === true) {
        return null;
    }

    return false;
};
