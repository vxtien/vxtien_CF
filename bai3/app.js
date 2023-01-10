function convertToRoman(num) {
    if(num != parseInt(num)){
        throw new Error('Not integer')
    }
    if(num > 5000 || num < 0 ){
        throw new Error('Lower than 5000')
    }
    num = parseInt(num)
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let str = '';

    for (let i of Object.keys(roman)) {
        let a = Math.floor(num / roman[i]);
        num -= a * roman[i];
        str += i.repeat(a);
    }

    return str;
}
let output = document.getElementById("num")
let input = document.getElementById("decimal")
function init() {
    document.getElementById("decimal").addEventListener("input", () => {
        try {
            let data = convertToRoman(input.value)
            output.innerHTML = data || "Where magic happens"
            console.log(data)
            input.classList.add("is-valid")
            input.classList.remove("is-invalid")
        
        } catch (err) {
            if (err.message == 'Not integer' || err.message == 'Lower than 5000') {
                input.classList.remove("is-valid")
                input.classList.add("is-invalid")
            }
        }
    })
}
init()



