import { createField } from "@commodo/fields";
import withFieldDataTypeValidation from "@commodo/fields/fields/withFieldDataTypeValidation";

function float({ list, ...rest } = {}) {
    return withFieldDataTypeValidation(
        value =>
            typeof value === "number" && value > -Infinity && value < Infinity && value % 1 !== 0
    )(createField({ ...rest, list, type: "float" }));
}

export { float };
