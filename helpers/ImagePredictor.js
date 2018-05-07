const request = require('request');
var PredictionFactory = require("../models/PredictionFactory").PredictionFactory;

function validate(imageUrl){
    //Call computer vision api here
    return true;
}

function predict(imageUrl){
    const requestURL = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/'+process.env.PROJECT_ID+'/url?iterationId='+process.env.ITERATION_ID

    return new Promise(function(resolve, reject){
        request.post({
            headers:{
                'Prediction-Key' : process.env.PREDICTION_KEY,
                'Content-Type': 'application/json'
    
            },
            url:     requestURL,
            body:     '{"Url": "'+imageUrl+'"}'
            }, function(error, httpresponse, body){

                if (error) return reject(err);
                    try {
                        resolve(JSON.parse(body));
                    } catch(e) {
                        reject(e);
                }
            });
    });
}

function sortPredictions(predictions){
    return predictions.sort(function(obj1, obj2) {
        // Descending 
        return obj2.Probability - obj1.Probability;
    });
}

module.exports = {
    validateImage: validate,
    predictImage: predict
};