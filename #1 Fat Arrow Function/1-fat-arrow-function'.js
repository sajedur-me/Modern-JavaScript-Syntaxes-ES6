// সাধারন ফাংশন নমুনা প্যারামিটার ছাড়া  - Simple function Without parameters
function add() {
    return 1 + 2;
}
console.log(add()); // 3

// সাধারন ফাংশন নমুনা প্যারামিটার ব্যবহার করে  - Simple function Using parameters
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5)); // 8




// ES6 ফ্যাট অ্যারো ফাংশন নমুনা প্যারামিটার ছাড়া  - ES6 Fat Arrow Function Without parameters
let plus = () => {
    return 1 + 2;
}
console.log(plus()); // 3

// ES6 ফ্যাট অ্যারো ফাংশন নমুনা প্যারামিটার ব্যবহার করে  - ES6 Fat Arrow Function Using parameters
let total = (a, b) => {
    return a + b;
}
console.log(total(3, 5)); // 8

// আবার যদি ১ টি মাত্র স্টেটমেন্ট থাকে তাহলে ১ লাইনে রিটার্ন করতে পারি তবে তখন রিটার্ন কিওয়ার্ড দেওয়া যাবে না, তখন কিউরলি ব্রেসেস {} ব্যবহার করা যাবে না - ES6 Fat Arrow Function With one statement
let oneStmnt = () => 10;
console.log(oneStmnt()); // 10

// আবার যদি ১ টি মাত্র স্টেটমেন্ট থাকে তাহলে ১ লাইনে রিটার্ন করতে পারি তবে তখন রিটার্ন কিওয়ার্ড দেওয়া যাবে না, তখন কিউরলি ব্রেসেস {} ব্যবহার করা যাবে না - ES6 Fat Arrow Function With one statement and parameters
let oneStmntWithParam = (a, b) => a + b;
console.log(oneStmntWithParam(4, 6)); // 10

// যদি ফাংশনে ১ টি মাত্র প্যারামিটার থাকে তাহলে প্যারামিটার এর চারপাশে ব্রেসেস () ব্যবহার না করলেও হবে - ES6 Fat Arrow Function With one parameter and one statement
let oneParamiter = a => a * 2; 
console.log(oneParamiter(5)); // 10



// ES6 অ্যারো ফাংশন যে কারণে তৈরি করা হয়েছে অর্থাৎ প্রধান কাজ হল this কিওয়ার্ডের মান ঠিক রাখা - ES6 Arrow Function and this keyword
let javaScript = {
    name: "JavaScript",
    libraries: ["React", "Angular", "Vue"],
    printLibries: function() { // এখানে this কিওয়ার্ডের মান ঠিক থাকবে কারণ আমরা এখানে ফ্যাট অ্যারো ফাংশন ব্যবহার করছি না
        this.libraries.forEach(function(a) {
            console.log(`${this.name} is a library of ${a} `); // এখানে this.name এর মান undefined হবে কারণ forEach এর ভিতরে this কিওয়ার্ডের মান পরিবর্তিত হয়ে যায়
        })
    }
};


// এখন উপরের নিয়ম অনুযায়ী আমরা ফ্যাট অ্যারো ফাংশন ব্যবহার করতে পারি যাতে this কিওয়ার্ডের মান ঠিক থাকে - ES6 Arrow Function and this keyword
let javaScript2 = {
    name: "JavaScript", 
    libraries: ["React", "Angular", "Vue"],
    printLibraries: () => { // এখানে this কিওয়ার্ডের মান ঠিক থাকবে কারণ আমরা এখানে ফ্যাট অ্যারো ফাংশন ব্যবহার করছি
        this.libraries.forEach((a) => console.log(`${this.name} is a library of ${a}`)); // এখানে this.name এর মান JavaScript হবে কারণ ফ্যাট অ্যারো ফাংশন ব্যবহার করার কারণে this কিওয়ার্ডের মান ঠিক থাকবে
    }
};
