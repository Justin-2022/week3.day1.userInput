// Step X1: Remove refresh on submit button
// Step X2: Using DOM get the four input spaces from index.html
// Step X3: Create four new elements which corresponds to the user input for each field
// Step X4 Using string interpolation or string concenation fill and display the following
// sentence: “Last night I ate a {`#noun`}, and today I just had to {`#verb`}. What a {`#adjective`} day!”

// Getting information from index.html
let submitButton = document.getElementById('submit_button');
let title = document.getElementById("title_input");
let mainTitle = document.getElementById('main_title');
let noun = document.getElementById('noun');
let verb = document.getElementById('verb');
let adjective = document.getElementById('adjective');
let formContainer = document.querySelector('.form_container');
let storyResult = document.getElementById('story_result');

// Extra Credit Portion: Getting information from added inputs fields from index.html
let adverb = document.getElementById('adverb');
let name = document.getElementById('name');

// Extra Credit Portion:
// Declared variable to act as transparency value
let transNum = 1;

// Occurs when 'submit' buttom is clicked
function buttonClicked(event) {
    // Alerts user to fill in all fields if one or more fields are left open
    if(title.value == "" || noun.value == "" || verb.value == "" || adjective.value == "" || adverb.value == "" || name.value == "") {
        alert('Please fill out all the required fields');
    }
    
    // Remove 'submit' button's natural tendencies to refresh when clicked
    event.preventDefault();

    // Extra Credit Portion: 
    // Fading out input fields when 'submit' button is clicked
    function fade() {
        setInterval(function() {
            transNum -= 0.2
            formContainer.style.opacity = transNum;
            if(transNum > 0) {
                fade();
            }
        }, 100)
    }

    fade();
    
    // Displays what the user typed into the title field
    mainTitle.innerHTML = title.value;

    // Displays a sentence where what the user typed into the fields (excluding the title fields)
    // is filled into specific, fixed parts of the sentence
    let madlibSentence = 'Last night ' + name.value  + ' ate a ' + noun.value + ', and today ' + name.value + ' just had to ' + verb.value + ' ' + adverb.value + '. What a ' + adjective.value + ' day!';
    storyResult.innerHTML = madlibSentence;
}

// A watch tower to check when the 'submit' button is clicked
submitButton.addEventListener('click', buttonClicked);