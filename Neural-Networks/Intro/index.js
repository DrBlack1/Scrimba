// input 0 0, output 0
// input 0 1, output 1
// input 1 0, output 1
// input 1 1, output 0

const net = new ImageBitmapRenderingContext.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

net.train(trainingData);

console.log(net.run([0, 0]));

// cmd + s
// ctrl + s

// HELLO LOOK DOWN VVVV