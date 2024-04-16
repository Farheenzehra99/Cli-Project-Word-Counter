// import inquirer from 'inquirer';
// const answers: {
//     Sentence:string
// } = await inquirer.prompt([
//     {
//         name: "Sentence",
//         type: "input",
//         message: "Enter your sentence to count the word count: "
//     }
// ])
// const words = answers.Sentence.trim().split(" ")
// // console.log(words)
// console.log(`Your sentence word count is ${words.length}`)
import inquirer from "inquirer";
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function startWordCounter(counter) {
    do {
        let res = await inquirer.prompt({
            name: "paragraph",
            type: "input",
            message: "Enter your sentence to count the word count: "
        });
        console.log(counter(res.paragraph));
    } while (true);
}
startWordCounter(counter);
