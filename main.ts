#! /usr/bin/env Node
import inquirer from "inquirer";

const counter =(paragraph: string)=>paragraph.replace(/\s/g,"").length


async function startWordCounter(counter:(text:string)=>number){
    do{
    let res = await inquirer.prompt({
        name: "paragraph",
        type: "input",
        message: "Enter your sentence to count the word count: "
    })
     console.log(counter(res.paragraph))
}
while(true)
}

startWordCounter(counter)
