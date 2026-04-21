// ডিটেইলস : জাভাস্ক্রিপ্টে কিছু ভ্যালু আছে যেগুলোকে ট্রুথি (Truthy) বা ফাল্সি (Falsy) বলা হয়। ট্রুথি ভ্যালুগুলো সত্য হিসেবে বিবেচিত হয় এবং ফাল্সি ভ্যালুগুলো মিথ্যা হিসেবে বিবেচিত হয়। নিচে কিছু সাধারণ ট্রুথি এবং ফাল্সি ভ্যালুর উদাহরণ দেওয়া হলো:

// ফাল্সি ভ্যালু:
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

// ট্রুথি ভ্যালু:
let truthyValues = [true, 1, -1, 0.1, "hello", [], {}, function() {}];

// ফাল্সি ভ্যালু চেক করা
falsyValues.forEach(value => {
    if (value) {   // এই ব্লক কখনই এক্সিকিউট হবে না কারণ সব ফাল্সি ভ্যালু মিথ্যা হিসেবে বিবেচিত হয় 
        console.log(value, "is a truthy value");
    } else {
        console.log(value, "is a falsy value");
    }
});

// ট্রুথি ভ্যালু চেক করা
truthyValues.forEach(value => {
    if (value) {
        console.log(value, "is a truthy value");
    } else {
        console.log(value, "is a falsy value");
    }
});
