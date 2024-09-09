// • باستعمال `for loop` قم بطباعة الاعداد الزوجيه الموجودة في نطاق من  25  - الى 0.

// • باستعمال `for loop`  احسب تربيع الاعداد من 1 - 10.

// • باستعمال `loop` قم بطباعة الاعداد الفردية من 1 - 20 .


console.log("print even numbers btwen 1 - 25")


for (let i = 0; i <= 25; i++) {
    // طباعة الرقم إن كان زوجي
    if (i % 2 !== 1) {
        console.log("even numbers  " +i)
    }
  }



  for (let i = 1; i <= 10; i++) {
    // طباعة الرقم إن كان زوجي
    console.log("Squaring numbers " + i**2)

  } 

console.log("print odd numbers btwen 1 - 20")
for (let i = 1; i <= 20; i++) {
    // طباعة الرقم إن كان فردي
    if (i % 2 != 0) {
      console.log("odd numbers  " +i)
    }
  }