import { FieldInferencer } from '../types';

export const booleanInfer: FieldInferencer = (key, props) => {
    //@ts-ignore
    if (props.type === 'boolean') {
        return {
            key,
            type: 'boolean',
        };
    }

    return false;
};
