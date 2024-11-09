{
    let sum: number = 0
    function sumArray(arr: number[]): number {
        for(let i:number = 0; i<arr.length; i++){
            sum+=arr[i]
        }
        
         return sum
    }
    
    console.log(sumArray([1,2,3,4,5]))
    
    }