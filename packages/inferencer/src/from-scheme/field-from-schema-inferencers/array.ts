import has from "lodash/has";
import { FieldInferencer } from '../types';

export const arrayInfer: FieldInferencer = (
    key,
    props,
    infer,
    type,
) => {
    if (has(props, 'enum')) {
        return {
            key,
            type: 'text',
        };
    }

    //@ts-ignore
    if (props.type === 'array') {
        //@ts-ignore
        const basicType = infer(key, props.items, infer, type) || {
            type: 'text',
        };

        return {
            key,
            type: basicType.type,
        };
    }

    return false;
};
