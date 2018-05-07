module.exports = [ripeResponse];

function ripeResponse(session){
    session.send("That looks ripe to me! But lets check a few things ..");
    session.send("Gently squeeze the avocado without applying pressure from your fingertips... \n- If the avocado yields to firm, gentle pressure, it is ripe. \n- However, if it feels mushy, it may be overripe.");
    session.endDialog("You can also check the stem at the top of the avocado by peeling it off... \n- If it comes away easily and you find green underneath, your avocado is ripe and ready to eat! \n- However, if you find brown underneath, the avocado is overripe, and you're likely to find brown spots inside the fruit.")
}