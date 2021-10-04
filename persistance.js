const additivePersistence = (num) => {
    let str = String(num)
    let persistence = 0
    if (str.length === 1){
        return 0
    }
    while (true){
        let newNumber = 0
        persistence += 1
        for (let i=0; i < str.length; i++){
            newNumber += Number(str[i])
        }
        if (String(newNumber).length === 1){
            return persistence
        }else{
            str = String(newNumber)
        }
    }
}

const multiplicativePersistence = (num) => {
    let str = String(num)
    let persistence = 0
    if (str.length === 1){
        return 0
    }
    while (true) {
        let newNumber = 1
        persistence += 1
        for (let i=0; i < str.length; i++){
            newNumber *= Number(str[i])
        }
        if (String(newNumber).length === 1){
            return persistence
        }else {
            str = String(newNumber)
        }
    }
}



let number = Number(process.argv[2])
console.log(`additive Persistence of ${number}: ${additivePersistence(number)}`)
console.log(`multiplicative Persistence of ${number}: ${multiplicativePersistence(number)}`)