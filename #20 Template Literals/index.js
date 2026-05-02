// কোডটি একটি জাভাস্ক্রিপ্ট ফাইল যা টেমপ্লেট লিটারেল সম্পর্কিত। এখানে দুটি ভেরিয়েবল `a` এবং `b` ডিফাইন করা হয়েছে এবং তাদের যোগফল একটি টেমপ্লেট লিটারেল ব্যবহার করে কনসোল-এ আউটপুট করা হয়েছে। এছাড়াও, একটি নাম ভেরিয়েবল ডিফাইন করা হয়েছে এবং সেটি একটি টেমপ্লেট লিটারেল ব্যবহার করে স্বাগত বার্তা আউটপুট করা হয়েছে। এই ফাইলটি `index.js` নামে সংরক্ষিত এবং এটি টেমপ্লেট লিটারেল ব্যবহার করে কিভাবে ভেরিয়েবল এবং এক্সপ্রেশন এমবেড করা যায় তা প্রদর্শন করে।

const a = 10;
const b = 20;

console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Using template literals to embed variables and expressions

const name = "Sajed";
console.log(`Hello, ${name}! Welcome to ES6 template literals.`); // Using template literals to embed a variable in a string