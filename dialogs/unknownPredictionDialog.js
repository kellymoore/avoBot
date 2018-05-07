var builder = require('botbuilder');

module.exports = [unknownResponse];

function unknownResponse(session){
    session.send("I'm not too sure by looking at that Avocado. Heres a few things to check: ");
    session.send("Gently squeeze the avocado without applying pressure from your fingertips... -If the avocado feels very firm, its not ripe yet. -If the avocado yields to firm, gentle pressure, it is ripe. -If it feels mushy, it may be overripe.");
    session.endDialog("You can also check the stem at the top of the avocado by peeling it off. -If the stem does not pull off, the avocado is not ready. -If it comes away easily and you find green underneath, your avocado is ripe and ready to eat! -If you find brown underneath, the avocado is overripe, and you're likely to find brown spots inside the fruit.")
}