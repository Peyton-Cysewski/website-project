

function title_prompt() {

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

function run_alert () {
alert('Be Prepared for pure, unadulterated awesomeness!!!');
}

function run_confirm () {
confirm('Are you ready?');
}