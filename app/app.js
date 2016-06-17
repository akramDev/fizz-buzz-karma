function fizzbuzz (input){
    
    if(isDevisibleBy3(input) & isDevisibleBy5(input)){
        return 'fizzbuzz'
    }
    if(isDevisibleBy3(input)){
        return 'fizz'
    }
    if(isDevisibleBy5(input)){
        return 'buzz'
    }
    return input;
    
}

function isDevisibleBy3(input) {
    return input % 3 == 0
}

function isDevisibleBy5(input) {
    return input % 5 == 0
}