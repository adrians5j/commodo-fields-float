import { createField } from "@commodo/fields";
import withFieldDataTypeValidation from "@commodo/fields/fields/withFieldDataTypeValidation";

function float({ list, ...rest } = {}) {
    return withFieldDataTypeValidation(
        value =>
            typeof value === "number" && value > -Infinity && value < Infinity
    )(createField({ ...rest, list, type: "float" }));
}

export { float };
