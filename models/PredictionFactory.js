function PredictionFactory (){
    this.getPrediction = function (prediction){
        var predictedType;

        if (prediction.Probability > process.env.PROBABILITY_THRESHOLD){
            switch(prediction.Tag){
                case 'ripe':
                    predictedType = new RipePrediction();
                    break;
                case 'unripe':
                    predictedType = new UnripePrediction();
                    break;
                default:
                    predictedType = new UnknownPrediction();
            }
        }else{
            predictedType = new UnknownPrediction();
        }
        return predictedType;
    }
};

var RipePrediction = function (){
    this.response = function(session){
        session.replaceDialog('/ripe-response-dialog');
    }
}

var UnripePrediction = function (){
    this.response = function(session){
        session.replaceDialog('/unripe-response-dialog');
    }
}

var UnknownPrediction = function (){
    this.response = function(session){
        session.replaceDialog('/unknown-response-dialog');
    }
}

 exports.PredictionFactory = PredictionFactory;