// কোডটি ES6 মডিউল সিস্টেম ব্যবহার করে বিভিন্ন ধরনের ইম্পোর্ট এবং এক্সপোর্ট দেখাচ্ছে। এখানে আমরা named exports, default exports, এবং aliasing এর উদাহরণ দেখব। `external.js` ফাইলটি বিভিন্ন ধরনের এক্সপোর্ট ডিফাইন করেছে এবং `index.js` ফাইলটি সেগুলো ইম্পোর্ট করে ব্যবহার করছে। 

// প্রথমে আমরা `external.js` ফাইল থেকে named exports `a` এবং `pi` ইম্পোর্ট করছি এবং তাদের মান কনসোল-এ প্রিন্ট করছি। 


import { a, pi } from './external.js'; // Importing named exports from external.js
console.log(`The value of a is: ${a}`);
console.log(`The value of pi is: ${pi}`);


import * as math from './external.js'; // Importing everything as an object
console.log(`The value of math.a is: ${math.a}`);
console.log(`The value of math.pi is: ${math.pi}`);



import { a as alpha, pi as circlePi } from './external.js'; // Importing with alias
console.log(`The value of alpha is: ${alpha}`);
console.log(`The value of circlePi is: ${circlePi}`);


import external from './external.js'; // Importing the default export
console.log(`The default export is: ${external}`);
console.log(`Area of a circle with radius 2: ${external(2)}`); // Using the default function export







