const readline = require("readline");
const r1 = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

const input = (Question)=> {
    return new Promise(function(resolve,reject) {
        r1.question(Question, (answer1) => {
            try {
                resolve(answer1);
            }catch(err) {
                reject(err)
            }
        })
    })
}

const main = async () => {
    let angka1 = await input("Input Bilangan 1 : ")
    let angka2 = await input("Input Bilangan 2 : ")
 
    
    let Result1 = parseInt(angka1) + parseInt(angka2)
    let Result2 = parseInt(angka1) - parseInt(angka2)
    let Result3 = parseInt(angka1) * parseInt(angka2)
    let Result4 = parseInt(angka1) / parseInt(angka2)
    let Result5 = parseInt(angka1) % parseInt(angka2)
    console.log(Result1)
    console.log(Result2)
    console.log(Result3)
    console.log(Result4)
    console.log(Result5)
process.exit();

}

main()