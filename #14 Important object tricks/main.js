
// কোডের মধ্যে অবজেক্টের কী, ভ্যালু এবং এন্ট্রিগুলি বের করার জন্য Object.keys(), Object.values() এবং Object.entries() মেথড ব্যবহার করা হয়েছে। 


const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};


const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log(keys); // ['name', 'age', 'city']
console.log(values); // ['John', 30, 'New York']
console.log(entries); // [['name', 'John'], ['age', 30], ['city', 'New York']]


// আরও বিস্তারিত ভাবে বলতে গেলে, Object.keys() মেথড অবজেক্টের সমস্ত কী (property names) একটি অ্যারে হিসেবে রিটার্ন করে। Object.values() মেথড অবজেক্টের সমস্ত ভ্যালু (property values) একটি অ্যারে হিসেবে রিটার্ন করে। আর Object.entries() মেথড অবজেক্টের সমস্ত কী-ভ্যালু জোড়া (key-value pairs) একটি অ্যারে হিসেবে রিটার্ন করে, যেখানে প্রতিটি জোড়া একটি সাব-অ্যারে হিসেবে থাকে。



