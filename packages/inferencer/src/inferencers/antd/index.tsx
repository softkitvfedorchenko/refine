import React from "react";
import { useResource } from "@refinedev/core";

import { ShowInferencer } from "./show";
import { ListInferencer as NextListInferencer } from "./next/list";
import { CreateInferencer } from "./next/create";
import { EditInferencer } from "./edit";

import type { InferencerComponentProps } from "../../types";

const AntdInferencer: React.FC<InferencerComponentProps> = ({
    action: actionFromProps,
    id: idFromProps,
    ...props
}) => {
    const { action, id, ...rest } = useResource();
    console.log('rest: ', rest);

    switch (actionFromProps ?? action) {
        case "show":
            return <ShowInferencer {...props} id={idFromProps ?? id} />;
        case "create":
            return <CreateInferencer {...props} id={idFromProps ?? id} />;
        case "edit":
            return <EditInferencer {...props} id={idFromProps ?? id} />;
        default:
            return <NextListInferencer {...props} id={idFromProps ?? id} />;
    }
};

export { AntdInferencer };
export {
    ShowInferencer as AntdShowInferencer,
    renderer as AntdShowRenderer,
} from "./show";
export {
    EditInferencer as AntdEditInferencer,
    renderer as AntdEditRenderer,
} from "./edit";
export {
    ListInferencer as AntdListInferencer,
    renderer as AntdListRenderer,
} from "./next/list";
export {
    CreateInferencer as AntdCreateInferencer,
    renderer as AntdCreateRenderer,
} from "./next/create";
export * from "../../types";
