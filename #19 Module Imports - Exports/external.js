// কোডটি একটি জাভাস্ক্রিপ্ট ফাইল যা মডিউল ইম্পোর্ট এবং এক্সপোর্ট সম্পর্কিত। এখানে দুটি ভেরিয়েবল `pi` এবং `a` ডিফাইন করা হয়েছে এবং তাদের এক্সপোর্ট করা হয়েছে। এছাড়াও, একটি ডিফল্ট ফাংশন `calculateArea` ডিফাইন করা হয়েছে যা একটি বৃত্তের ক্ষেত্রফল হিসাব করে। এই ফাইলটি `external.js` নামে সংরক্ষিত এবং এটি থেকে বিভিন্ন ধরনের এক্সপোর্ট ইম্পোর্ট করা হয়েছে `index.js` ফাইলে।

const pi = 3.14159;
const a = 5;

// export default a; // Exporting a default value

export { a, pi };

export default function calculateArea(radius) {
    return pi * radius * radius;
} // Exporting a default function
