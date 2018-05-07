
var PredictionFactory = require("../models/PredictionFactory").PredictionFactory;
var ImagePredictor = require('../helpers/ImagePredictor');

module.exports = [predict, notvalid];

function predict(session, args){
  if (!ImagePredictor.validateImage(args.prediction.contentUrl)){
    next();
  }

  ImagePredictor.predictImage(args.prediction.contentUrl)
  .then(function(response) {
    var predictions = response.Predictions;
    var predictionFactory = new PredictionFactory();
  
    predicted = predictionFactory.getPrediction(predictions[0]);
    predicted.response(session)

}).catch(function(err) {
   console.log(err)
});
  
}

function notvalid(session){
  session.endDialog("Hmm that doesn't look like an Avocado to me. Please try sending another picture.");
}