import { FieldInferencer } from '../types';

export const numberInfer: FieldInferencer = (key, props) => {
    // @ts-ignore
    if (props.type === 'number') {
        return {
            key,
            type: "number",
        };
    }

    return false;
};
