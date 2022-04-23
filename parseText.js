const fs = require('fs');
const { buffer } = require('stream/consumers');

const file = fs.readFileSync("./modifiedText.txt");
const testAsString = file.toString();
const splitQuestions = testAsString.split("======\n");
const questions = []
splitQuestions.forEach(questionsAndPrompt => {
    const questionsAndPromptSplit = questionsAndPrompt.split("+++++\n");
    let prompt = questionsAndPromptSplit[0];
    
    prompt = prompt.substring(3);
    prompt = prompt.trim();
    console.log({ questionsAndPromptSplit });
let answers = questionsAndPromptSplit[1].split("\n")
    answers = answers.map(answer => {
        return answer.trim()
}).filter( answer => answer != '');

    questions.push({prompt, answers})

})

fs.writeFileSync('questions.json', JSON.stringify(questions))