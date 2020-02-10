import { float } from "commodo-fields-float";
import { withFields, WithFieldsError } from "@commodo/fields";

import { compose } from "ramda";

const Model = compose(withFields({ attribute: float() }))();

test("should accept float values", () => {
    const model = new Model();

    model.attribute = 5.2;
    expect(model.attribute).toEqual(5.2);

    model.attribute = 0.1;
    expect(model.attribute).toEqual(0.1);

    model.attribute = 1.0000000;
    expect(model.attribute).toEqual(1);

    model.attribute = 1.01;
    expect(model.attribute).toEqual(1.01);

    model.attribute = 99999999.123123;
    expect(model.attribute).toEqual(99999999.123123);

    model.attribute = null;
    expect(model.attribute).toEqual(null);

    model.attribute = undefined;
    expect(model.attribute).not.toBeDefined();
});

["1", "0", "0.5", {}, [], true, false, Infinity, -Infinity].forEach(value => {
    test(`shouldn't accept ${typeof value}`, async () => {
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

test("should be able to add floats and set the total as a new value", () => {
    const model = new Model();

    model.attribute = 5.25;
    expect(model.attribute).toEqual(5.25);

    model.attribute = model.attribute + 5;
    expect(model.attribute).toEqual(10.25);

    model.attribute += 5;
    expect(model.attribute).toEqual(15.25);
});
