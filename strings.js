//Write a function that takes in a string and returns it when reversed
//let food = “eating”
let food = "eating";
food.reversed;
console.log(food); 


//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function binarySearch(array, targets){
    let left = 0;
    let right = array.length -1;
    console.log("left",left);
    console.log("right", right);

    while (left <= right){
        console.log("left1", left);
        console.log("right1", right);
        let mid = Math.floor((left+right)/2);
        if(targets===array[mid]){
            return mid;
        }
        else if(targets < array[mid]){
            right = mid - 1;
        }
    else {left = mid + 1;
    }
    }
    return null;
}
let array = [2, 8, 0, 23, 5, 45, 76];
let targets = 23;
console.log(binarySearch(array, targets));


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let year = [2000, 2001, 2002, 2003, 2004, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,  2015, 2016,2017, 2018, 2019, 2020, 2021, 2022, 2023];
if(year % 2){
    return "this is a leap year";
} 
else{
    return "this is not a leap year";
}


//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function digits(){
    for (num in 0-100){
        if (num % 3 == 0){
            return("Fizz")
        }
        if (num % 5 == 0){
            return("Buzz")
        }
        if (num %3==0 && num%5==0){
            return("FizzBuzz")
        }
        else{
            return(num)
        }
    }

}


//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
let numArray = [12, 87, 45, 75, 23, 64, 73];
if (numArray % 4 == 0){
    return numArray;
}
else{
    return null
}




