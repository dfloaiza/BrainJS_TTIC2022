const spamClassifier = new brain.NeuralNetwork();

const trainData = 
      [
        {input: [0,0,0,0], output:{spam:0}},
        {input: [0,0,0,1], output:{spam:0}},
        {input: [1,1,1,0], output:{spam:1}},
        {input: [1,0,1,0], output:{spam:1}},
        {input: [1,1,0,0], output:{spam:0}}  
      ];

const trainingOptions = {
  iterations: 5000,
  activation:'sigmoid',
  log: true
};

const testData = [1,1,1,0]

spamClassifier.train(trainData, trainingOptions);
let result = spamClassifier.run(testData);
document.getElementById("resultado").innerHTML = result["spam"]+"<br>";
