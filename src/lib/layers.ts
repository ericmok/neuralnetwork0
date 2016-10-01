/*global module, require*/

import {N} from './neurons';

export interface LayerDefinition {
    kind: N,
    amount: number
}

/**
Instead of copying functions, we maintain an indirection to it instead
*/
// function ifObjectThenCreateDefaultNeuron(obj: N): N {
//     'use strict';
//
//     var key, // temp
//         indirection,
//         ret;
//
//     if (typeof obj === 'function') {
//         ret = new obj();
//         return ret;
//     }
//
//     indirection = new neurons.Neuron();
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             indirection[key] = obj[key];
//         }
//     }
//
//     return indirection;
}


/**
Constructor to create a new layer of neurons
*/
export class Layer {
    name: string;
    neurons: Array<N>;
    inputBuffer: Array<N>;
    outputBuffer: Array<N>;
    inputError: Array<number>;
    outputError: Array<number>;


    constructor() {
        this.name = Math.random().toString(36).substring(2);

        this.neurons = [];

        if (args.length > 1) {
            this.createMixNeurons(args);
        }

        this.inputBuffer = [];
        this.outputBuffer = [];
        this.inputError = [];
        this.outputError = [];

        this.resetBuffers();
    }
}
/*
Layer.prototype.resetBuffers = function () {
    'use strict';
    var i;

    for (i = 0; i < this.neurons.length; i += 1) {
        this.inputBuffer[i] = 0;
        this.outputBuffer[i] = 0;
        this.inputError[i] = 0;
        this.outputError[i] = 0;
    }
};

Layer.prototype.createMixNeurons = function (args) {
    'use strict';

    var i, j,
        neuronType = null;

    for (i = 0; i < args.length / 2; i += 1) {

        for (j = 0; j < args[i * 2 + 1]; j += 1) {
            neuronType = ifObjectThenCreateDefaultNeuron(args[i * 2]);
            this.neurons.push(neuronType);
        }
    }
};

Layer.prototype.forward = function () {
    'use strict';

    var self = this;

    this.neurons.forEach(function (el, index, arr) {
        self.outputBuffer[index] = el.forward(self.inputBuffer[index]);
    });

};

Layer.prototype.backward = function () {
    'use strict';

    var self = this;

    this.neurons.forEach(function (el, index, arr) {
        // TODO: Test this
        self.inputError[index] = el.backward(self.outputError[index], self.outputBuffer[index]);
    });

};

module.exports = {
    'Layer': Layer
};
*/