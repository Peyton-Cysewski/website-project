

function title_prompt() { //Tests prompts

//Do you like Planes?
var num = prompt('Do you like airplanes (1 = yes, 0 = no)?');
var words;
var id;

if (num >= 1) {
    id = 'id="good"';
    words = 'Welcome to Airplanes.com';
} else if (num == 0) {
    id = 'id="bad"';
    words = 'You can leave now';
} else {
    id = 'id="ugly"';
    words = 'Dude not cool, don\'t be a troll';
}

document.write('<h1 ' + id + '>' + words + '</h1>');
}

function run_alert () { //Tests alerts
alert('Be Prepared for pure, unadulterated awesomeness!!!');
}

function run_confirm () { //Tests confirm
confirm('Are you ready?');
}

function filler() { //Makes a lit of #'s to test function ability

    var fill = '#';
    var total = '';
    var answer = prompt('Give a single digit number between 1 and 10');

    while (isNaN(answer) || (answer > 10) ) { //validation loop
        answer = prompt('Please give a NUMBER BETWEEN 1 and 10')
    };
    
    for (var i = 0; i < answer; i++) { //makes the string of characters to desired length
        total = total + fill;
    }
    return total;
}