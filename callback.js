function explain_callback(name, age, task){
    console.log('Name: ' + name);
    console.log('Your age is ' + age);
    task();
}

function washHand(){
    console.log("Wash your hand before eating.")
}

function takeShower(){
    console.log("Take shower before eating.");
}

explain_callback('Jodu', 17, washHand);
explain_callback('Kodu', 19, takeShower);