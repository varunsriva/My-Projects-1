//1. Find the factorial of a number in JavaScript
//Sol. there are two approaches to this problem 1.Iterative 2.Recursive
//Iterative Approaches-

function factorial(n){
    let answer = 1;
    if(n == 0 || n == 1){
        return answer;
    }
    else{
        for(var i = n; i >= 1; i--){
        answer = answer * i
    }
    return answer;
    };
};
    let n = 6
    answer = factorial(n);

    console.log ("The factorial of " + n + " is " + answer);
