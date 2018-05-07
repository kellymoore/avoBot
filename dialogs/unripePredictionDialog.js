module.exports = [unripeResponse];

function unripeResponse(session){
    session.send("That Avocado doesn't look ripe to me. But lets check a few things ..");
    session.send("Gently squeeze the avocado without applying pressure from your fingertips.... If the avocado feels very firm, it will be ripe in a couple of days.. However, if it feels mushy, it may be over");
    session.endDialog("You can also check the stem at the top of the avocado by peeling it off. If the stem does not pull off, the avocado is not ready.")
}