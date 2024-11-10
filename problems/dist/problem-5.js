"use strict";
{
    const getProperty = (obj, prop) => {
        return obj[prop];
    };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}
