import { FieldInferencer } from '../types';

export const textInfer: FieldInferencer = (key, props) => {
    // @ts-ignore
    const isText = props.type === 'string';

    if (isText) {
        return {
            key,
            type: "text",
        };
    }

    return false;
};
