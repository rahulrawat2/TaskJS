//array of number
let unsortedArray =[2,23,1,6,7,4,6,]

function compare(a,b)
{
       /* if(a>b){
                return 1
        }
        if(b>a){
                return -1
        }
        else{
                return 0
        } */
        return a-b
}
unsortedArray.sort(compare);
console.log(unsortedArray)