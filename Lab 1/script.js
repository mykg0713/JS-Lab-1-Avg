let grades = [75, 80, 90, 66];
grades.length = 30;
grades[34] = 40;


let count=0;
let total=0;

for(let i = 0; i < grades.length; i++){
    if(grades[i] !== undefined){

        count++;
        total += grades[i];
    }
}

let avg=total/count;
console.log(avg);