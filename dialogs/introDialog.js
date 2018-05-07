module.exports = [unripeResponse];

function unripeResponse(session){
    session.endDialog("Hi, I'm Avo the Avocado bot. I can help you determine if your Avocado is ready to eat by sending me a picture of it.")
}