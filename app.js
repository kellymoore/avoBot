const restify = require('restify');
const builder = require('botbuilder');

require('dotenv').config();

var ImagePredictor = require('./helpers/ImagePredictor');

const customVisionURL = "https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/"

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978,
    function () {
        console.log('%s listening to %s',server.name,server.url);
    }
);

const connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector);
bot.dialog('PredictImageDialog', require('./dialogs/predictImage'));

    
bot.dialog('/', function (session) {
    var msg = session.message;
    if (msg.attachments && msg.attachments.length > 0) {
        session.replaceDialog('PredictImageDialog', {'prediction': msg.attachments[0]})
    } else {
        session.send("Sorry I didn't understand");
    }
}); 

bot.dialog('/intro', require('./dialogs/introDialog')).triggerAction({matches: [/help/i, /hi/i, /hello/i, /hey/i]});

bot.dialog('/ripe-response-dialog', require('./dialogs/ripePredictionDialog'));
bot.dialog('/unripe-response-dialog', require('./dialogs/unripePredictionDialog'));
bot.dialog('/unknown-response-dialog', require('./dialogs/unknownPredictionDialog'));