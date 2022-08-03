// Step X1: Remove refresh on submit button
// Step X2: Using DOM get the four input spaces from index.html
// Step 3: Create four new elements which corresponds to the user input for each field
// Step 4: Update these elements to whatever the user inputs into each field
// Step 5: Using string interpolation or string concenation fill and display the following
// sentence: “Last night I ate a {`#noun`}, and today I just had to {`#verb`}. What a {`#adjective`} day!”

// Getting information from index.html
let submitButton = document.getElementById('submit_button');
let title = document.getElementById("title_input");
let mainTitle = document.getElementById('main_title');

let noun = document.getElementById('noun');
let verb = document.getElementById('verb');
let adjective = document.getElementById('adjective');
// let adverb = document.getElementById('adverb');
// let name = document.getElementById('name');

let formContainer = document.querySelector('.form_container');

let storyResult = document.getElementById('story_result');

function buttonClicked(event) {
    event.preventDefault();

    formContainer.style.display = 'none';

    let madlibSentence = 'Last night' + /* name.value */ + ' I ate a ' + noun.value + ', and today' + /* name.value */ + ' I just had to ' + verb.value + /* adverb.value */ + '. What a ' + adjective.value + ' day!';
    storyResult.innerHTML = madlibSentence;
}

submitButton.onclick = buttonClicked;

title.onkeyup = function() {
    mainTitle.innerHTML = title.value;
}