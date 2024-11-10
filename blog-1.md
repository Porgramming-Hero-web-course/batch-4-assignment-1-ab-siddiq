# Union
Union is like logical or operation. It allows us to use more than one data type for a variable or a function parameter.
For example
```ts
let weight: number | string
```
Here in the above example to the variable we can assign two types of values - one is number type value and the other is string type value.

```ts
const getWeight = (weight: string | number):number => {
  if(typeof weight=== "number" ){
    return weight
  } else{
    return parseInt(weight)
  } 
}
console.log(getWeight(10))
console.log(getWeight("20kg"))
```
In the above function we can pass either number type of value or string type of value. It will function depending of the value we are passing. Which helps us to write less code with more efficiency.
# Intersection
Intersection is like logical and operator. It combines two object in one.
```ts
type City = {
  cityName: string,
}
type CityDetails = {
  noOfDivision: number,
  nofOfDisticts: number,
  population: number,
  divisions: string[],
  disticts: string[]
}

let city: City & CityDetails = {
  cityName: "BD",
  noOfDivision: 9,
  nofOfDisticts: 64,
  population: 2000000,
  divisions: ['d','l','k'],
  disticts: ['a','b']
}

console.log(city)
```
Here in the above code we have declared two type of object and combine them in one object using `intersection`. 
