import { float } from "commodo-fields-float";
import { withFields, WithFieldsError } from "@commodo/fields";

import { compose } from "ramda";

const Model = compose(withFields({ attribute: float({ list: true }) }))();

test("should accept float values", () => {
    const model = new Model();

    model.attribute = [5.5];
    expect(model.attribute).toEqual([5.5]);

    model.attribute = [0.1];
    expect(model.attribute).toEqual([0.1]);

    model.attribute = [0.5];
    expect(model.attribute).toEqual([0.5]);

    model.attribute = [99999999.00001];
    expect(model.attribute).toEqual([99999999.00001]);

    model.attribute = [null];
    expect(model.attribute).toEqual([null]);

    model.attribute = [undefined];
    expect(model.attribute).toEqual([undefined]);
});

[
    ["1"],
    ["0"],
    ["0.5"],
    [{}],
    [[]],
    [1, 2, 3],
    [1.2, 2.5, 5.6, 7],
    [true],
    [false],
    [Infinity],
    [-Infinity]
].forEach(value => {
    test(`float field shouldn't accept array of ${typeof value[0]}s`, async () => {
        const model = new Model();

        let error = null;
        try {
            model.attribute = value;
        } catch (e) {
            error = e;
        }

        expect(error).toBeInstanceOf(WithFieldsError);
        expect(error.code).toEqual(WithFieldsError.FIELD_DATA_TYPE_ERROR);
    });
});
