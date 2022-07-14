//Crear un perceptrón:
const net = new brain.NeuralNetwork();
// Establecer los datos de entrenamiento
const XORTrainingData = [
  { input: [0, 0], output: [0] },
  { input: [1, 1], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] }
];

const trainingOptions = {
  iterations: 5,
  log: (details) => console.log(details)
};
//Entrenar el perceptrón:
net.train(XORTrainingData, trainingOptions);
//console.log(net.run([0,0]));
//console.log(net.run([0, 1]));
for (;;) {
  console.log(net.run([1, 1]));
}

//console.log(net.run([1, 1]));
