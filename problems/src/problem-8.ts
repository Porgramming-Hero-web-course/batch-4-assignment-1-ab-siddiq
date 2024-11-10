{
    interface T{
        name: string;
        age: number;
        email:string;
    }
    const validateKeys = (obj: T, keys: (keyof T)[]) =>{
        return keys.every(k => k in obj)
    }
    const person:T = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"])); 
}