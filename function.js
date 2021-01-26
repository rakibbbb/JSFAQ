function forLoop(num){
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        evenify(element);
    }
}

function evenify(nums){
    if(nums % 2 == 0){
        console.log(nums + ' is even number.');
    }
    else{
        console.log(nums + ' is odd number.');
    }
}

marks = [35, 40, 65, 52, 45, 53, 77];
console.log("Check Marks is even or odd----");
forLoop(marks);

friends_age = [17, 18, 19, 16, 20, 15, 21];
console.log("Check Age is even or odd-----");
forLoop(friends_age);