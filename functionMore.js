function forLoop(num){
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        evenify(element);
    }
}

function evenify(nums){
    var result;
    if(nums % 2 == 0){
        result = nums;
    }
    else{
        result = nums*2;
    }
    return result;
}

var output = evenify(20);
console.log(output);
