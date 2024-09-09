// اكتب دالة تقوم بترتيب هذه المصفوفة تصاعدياً .
let numbers = [1, 5, 3, 8, 2,4,6,7,9,10];

console.log(numbers.sort(function(a, b){return a - b}))


//قم بإنشاء مصفوفة جديدة تحتوي على مربعات العناصر في المصفوفة الأصلية.


//قم بإرجاع أول عنصر في المصفوفة يكون أكبر من 25.








// قم بـإرجاع المصفوفة التي تحتوي على الأسماء التي تحتوي على حرف `'a'`.

// قم بتحويل المصفوفة إلى سلسلة نصية (string) مفصولة بـ `-`.
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

 
 let namesWithA = names.filter(name => name.includes('a'));

 let namesString = namesWithA.join('-');

console.log(namesString); 



// قم بالتحقق  مما إذا كانت المصفوفة تحتوي على اسم يبدأ  بحرف `'b'`

// قم بإرجاع مصفوفة جديدة تحتوي على العناصر من العنصر الثاني إلى الرابع

// قم بإضافة `'yellow'` إلى بداية المصفوفة



let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];


let words = ['hello', 'world', 'javascript', 'array', 'function'];



 let wordLengths = words.map(word => word.length);
console.log(wordLengths);  
 let found = words.includes('javascript');
if (found) {
  console.log("تم العثور على كلمة javascript");
} else {
  console.log("لم يتم العثور على كلمة javascript");
}