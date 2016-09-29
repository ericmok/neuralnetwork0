
//var key; // Temp variable for copying keys in a loop

/**
* Neural models for layers.
* Should contain a name and both forward and backward interfaces
*/
export class Neuron {
    name: string;

    constructor() {
        this.name = Math.random().toString(36).substring(2);
    }

    forward(input: number): number {
      return input;
    }

    backward(error: number) : number {
      return error;
    }
}


export class IdentityNeuron extends Neuron {}


export class BiasNeuron extends Neuron {
    forward(): number {
        return 1;
    }

    backward(): number {
      return 0;
    }
}


export class SigmoidNeuron {
    forward(input: number): number {
        return 1.0 / (1.0 + Math.exp(-input));
    }

    // Output is the activation value created by forward
    backward(err: number, output: number): number {
      return output * (1 - output) * err;
    }
}


export class RectifiedLinearNeuron {
    forward(input: number): number {
        return Math.max(0, input);
    }

    backward(err: number, output: number): number {
      return ((output > 0) ? err : 0);
    }
}