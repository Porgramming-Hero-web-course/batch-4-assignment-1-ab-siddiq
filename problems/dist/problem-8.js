"use strict";
{
    const validateKeys = (obj, keys) => {
        return keys.every(k => k in obj);
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}
