// কোডের ব্যাখ্যা: এই কোডটি একটি অ্যারে `numbers` তৈরি করে যার মধ্যে ১ থেকে ৫ পর্যন্ত সংখ্যাগুলি রয়েছে। তারপর `findIndex` মেথড ব্যবহার করে একটি ফাংশন পাস করা হয় যা প্রতিটি সংখ্যাকে পরীক্ষা করে। প্রথম `return` স্টেটমেন্টটি চেক করে যে সংখ্যা ৩ এর সমান কিনা, এবং দ্বিতীয় `return` স্টেটমেন্টটি চেক করে যে সংখ্যা ১০ এর বেশি কিনা।

let numbers = [1, 2, 3, 4, 5];

let index = numbers.findIndex((number, index, arr) => {
  return number === 3;
  return number > 10;
});

console.log(index); // Output: 2
console.log(index); // Output: -1
