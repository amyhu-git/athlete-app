const femaleRecord = 10.49;
const maleRecord = 9.58;
const standard = 0.1;

let time
let reactionTime

function promptInput() {
    //Regular Expression: Remove anything that is not a letter a-z
    let whichEvent = prompt("Are you competing in the MEN'S or WOMEN'S event?").toLowerCase()
        .replace(/[^a-z]+/g, "")
        .replace("a", "e")
        .replace("s", "");

    if (whichEvent == "women" || whichEvent == "men") {
        time = parseInt(prompt("Please enter your best times for running the 100m dash:", "0.00"));
        console.log(time);
        reactionTime = parseInt(prompt("Please enter your reaction time:", "0.00"));
        console.log(reactionTime);

        //Error input:
        if ((isNaN(time)) || (isNaN(reactionTime))) {
            alert("ERROR! \nPlease enter a number!");
        } else {
            console.log(time, reactionTime);
        };
    } else {
        alert("ERROR!\nPlease specify if you're competing for the MEN's or WOMEN's world record.");
    };

    switch (whichEvent) {
        case "women":
            let new_femaleRecord = (femaleRecord - time).toFixed(2);
            let no_femaleRecord = (time - femaleRecord).toFixed(2);

            if ((time < femaleRecord) && (reactionTime >= standard)) {
                Alert.render(`<b>CONGRATULATIONS!</b><br><br>
                You have broken the current women 's world record of ${femaleRecord} seconds by ${new_femaleRecord} seconds.
                <br><br><b>NEW RECORD: ${time} seconds</b>`);
            } else if (reactionTime < standard) {
                Alert.render("<b>False start!</b><br>Your reaction time should be above 0.1s.");
            } else {
                Alert.render(`Oh Blimey, no new world record has been set today:<br>You've missed it by ${no_femaleRecord} seconds.`);
            };
            break;
        case "men":
            let new_maleRecord = (maleRecord - time).toFixed(2);
            let no_maleRecord = (time - maleRecord).toFixed(2);
            if ((time < maleRecord) && (reactionTime >= standard)) {
                Alert.render(`<b>CONGRATULATIONS!</b><br><br>
                You have broken the current men's world record of ${maleRecord} seconds by ${new_maleRecord} seconds.<br><br>
                <b>NEW RECORD: ${time} seconds</b>`)
            } else if (reactionTime < standard) {
                Alert.render("False start!<br>Your reaction time should be above 0.1s.");
            } else {
                Alert.render(`Oh Blimey, no new world record has been set today:<br>You've missed it by ${no_maleRecord} seconds.`);
            };
            break;
        default:
            console.log("Error in input")
            break;
    };

}

function displayRecords() {
    Alert.render(
        `Current best times for running the 100 metres dash <br><br>
        <b>WOMEN'S RECORD:</b> <br>10.49 seconds (set by Florence Griffith-Joyner in 1988)<br>
        <b>MEN'S RECORD:</b> <br>9.58 seconds (set by Usain Bolt in 2009)`)
}

function CustomAlert() {
    this.render = function(dialog) {

        //display box in center
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        var overlay = document.getElementById('overlay');
        var box = document.getElementById('box')
        box.style.display = 'block';
        overlay.style.height = winHeight + 'px'
        box.style.left = (winWidth / 2) - (550 * .5) + 'px';
        box.style.top = '175px';
        box.style.display = 'block'

        //add content
        document.getElementById('head').innerHTML = "World Record Status"
        document.getElementById('body').innerHTML = dialog;
        document.getElementById('foot').innerHTML = '<button id="ok-btn" onclick= "Alert.ok()"> OK </button>'
    }
    this.ok = function() {
        document.getElementById('box').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }
}
var Alert = new CustomAlert()