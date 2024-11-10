{
    const getProperty = <T,U extends keyof T>(obj: T, prop:U) =>{
        return obj[prop]
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person,"name"))
}