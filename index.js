//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``
console.log(word.slice(4).toUpperCase());
//What does ``word.slice(4).toUpperCase()`` return?


//Experiment with other combinations (chains) of string methods.
console.log(word.replace("Scri","Egy").slice(4));
