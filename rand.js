const reps = document.querySelector("#number")
const exercise = document.querySelector("#exercise")
const quote = document.querySelector(".quote")
const button = document.querySelector('.but');
const stay = document.querySelector('.sh');
const audio = new Audio("alarm_short.mp3")

// To avoid a giant one line array I made a string and splited it
let quotes = "Don’t stop when you're tired, stop when you're done.* Be the fucking MVP.\
*From the time you take your first breath, you become eligible to die. You also become e\
ligible to find your greatness and become the one warrior*Greatness pulls mediocrity into\
 the mud. Get out there and get after it.*The worst thing that can happen to a man is to b\
ecome civilized.*Mental toughness is a lifestyle.*If you choose to do something, attack it.\
*Never let people who choose the path of least resistance steer you away from your chosen pa\
th of most resistance.*The only thing more contagious than a good attitude is a bad one.*It’s\
 possible to transcend anything that doesn’t kill you.*Pain unlocks a secret doorway in the mi\
nd, one that leads to both peak performance, and beautiful silence."
quotes = quotes.split("*")
let ex = ["Push-Ups", "Sit-Ups", "Burpees"]
let random, qnum, num_sit, num_push, num_burpee, x
let num_p = num_s = num_b = 0

button.onclick = () => {
    document.querySelector(".container").style.display = "none";
    document.querySelector("#number").style.display = "none";
    document.querySelector("#exercise").style.display = "none";
    stay.style.display = "block"
    stay.innerHTML = "Stay Hard!";
    stay.style.lineHeight = "90px";
    stay.style.fontSize = "3.6em";
    stay.style.margin = "2em auto";
    function rand() {
        random = Math.floor(Math.random() * 49 + 1) * 60000
        num_push = Math.floor(Math.random() * 49 + 10)
        num_sit = Math.floor(Math.random() * 29 + 10)
        num_burpee = Math.floor(Math.random() * 15 + 5)
        qnum = Math.floor(Math.random() * quotes.length)
        x = Math.floor(Math.random() * ex.length)
        x == 0 ? num_p = num_push : x == 1 ? num_s = num_sit : num_b = num_burpee
        coach()
    }
    
    function coach() {
        x == 0 ? console.log(`${random/60000} minutes | Push-Ups: ${num_p}`) : x == 1 ? 
        console.log(`${random/60000} minutes | Sit-Ups: ${num_s}`) : console.log(`${random/60000} minutes | Burpees: ${num_b}`)
        window.setTimeout(function() {
            document.querySelector(".container").style.display = "flex";
            document.querySelector("#number").style.display = "block";
            document.querySelector("#exercise").style.display = "block";
            stay.style.paddingBottom = "0";
            button.innerHTML = "Continue"
            stay.style.margin = "0";
            ex[x] === "Push-Ups" ? stay.innerHTML = num_push :
            ex[x] === "Sit-Ups" ? stay.innerHTML = num_sit : stay.innerHTML = num_burpee
            exercise.innerHTML = ex[x]
            quote.innerHTML = quotes[qnum]
            audio.play()
        }, random)
    }
    rand()
}


