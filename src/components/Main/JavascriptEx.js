import React from "react";

import home from "../../styles/home.module.sass";
import ExJs from "../OneLineBody/ExJs";

export default function JavascriptEx() {
  const JsCode = [
    {
      id: '1',
      tittle: "cuttingGrass",
      introduce: "lets cut all the grass",
      intro: `
// CuttingGrass([3, 4, 4, 4], 1, 1, 1) ➞ [[2, 3, 3, 3], [1, 2, 2, 2], "Done"]

// 1st cut shaves off 1: [3, 4, 4, 4] ➞ [2, 3, 3, 3]
// 2nd cut shaves off 1: [2, 3, 3, 3] ➞ [1, 2, 2, 2]
// 3rd cut shaves off 1: [1, 2, 2, 2] ➞ [0, 1, 1, 1], 
but one element reached zero so we return "Done".`,
      html: ``,
      css: ``,
      js: `
function cuttingGrass(arr, ...cuts) {
    const cut = (a, l) => a.map(v => v - l);
    const isCut = a => a.some(v => v < 1) ? "Done" : a;
    return cuts.map(v => isCut(arr = cut(arr, v)));
}
console.log(cuttingGrass([3, 4, 4, 4], 1, 1, 1))
`,
    },
    {
      id: '2',
      tittle: "Simplify an Object by Two Properties",
      introduce: "Arrays, loops, objects, sorting",
      intro: `
You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.

Example
simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]) ➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
]      
      `,
      html: ``,
      css: ``,
      js: `
  // someone did
function simplifyList(list) {
  const collected = []
  list.forEach(({brand, name}) => {
    const current = collected[collected.length - 1] || {};
    if (brand === current.brand && name === current.name) {
      current.count += 1;
    } else {
      collected.push({brand: brand, name: name, count: 1});
    }
  })
  return collected;
}

// I did
function simplifyList(list) {
	let reduceList = list.map(x => x.brand).reduce((acc,cur) => {
    if(acc.indexOf(cur) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])
  let arr = []
  for (let y in reduceList) {
    let a = 0
    for (let x = 0; x < list.length; x++) {
      if (reduceList[y] === list[x].brand) {
        a+=1
      }
    }
    arr.push(a)
  }
  let result = []
  for (let i = 0; i < reduceList.length; i++) {
    for (let y = 0; y < list.length; y++) {
      if (list[y].brand === reduceList[i]) {
        list[y].count = arr[i]
        result.push(list[y])
        break;
      } 
    }
  }
  return result
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]))
      `,
    },
    {
      id: '3',
      tittle: "Strong password",
      introduce: "Strings, validation",
      intro: `
Create a function that determines the minimum number of characters needed to make a strong password.

A password is considered strong if it satisfies the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character: !@#$%^&*()-+
Types of characters in a form you can paste into your solution:

const numbers = "0123456789"
const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special = "!@#$%^&*()-+"
      `,
      html: ``,
      css: ``,
      js: `
//#1
const strongPassword = (password) => {
  let count = 0;

  if (password.length < 6) {
    let n = 6 - password.length;
    password.match(/\\d/g) ? count : (count += 1);
    password.match(/[a-z]/g) ? count : (count += 1);
    password.match(/[A-Z]/g) ? count : (count += 1);
    password.match(/\\W/g) ? count : (count += 1);
    n >= count ? (count = n) : count;
    return count;
  }

  if (password.length >= 6) {
    password.match(/\\d/g) ? count : (count += 1);
    password.match(/[a-z]/g) ? count : (count += 1);
    password.match(/[A-Z]/g) ? count : (count += 1);
    password.match(/\\W/g) ? count : (count += 1);
    return count;
  }
};


//#2
// const MIN_PASSWORD_LENGTH = 6;

// const strongPassword = (password) => {
//   const rules = [/\\d/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()+-]/];
//   const passedRules = rules.reduce(
//     (totalPassed, rule) => totalPassed + rule.test(password),
//     0
//   );

//   return Math.max(
//     rules.length - passedRules,
//     MIN_PASSWORD_LENGTH - password.length
//   );
// };

console.log(strongPassword("#Edabit"))
console.log(strongPassword("Cr3ateAStr0ng1"))
console.log(strongPassword("CreateAStrongOne"))
console.log(strongPassword("willthispass"))
console.log(strongPassword("w1llth!spass?"))
console.log(strongPassword("W1llth!spass?"))
console.log(strongPassword("1sth!"))
console.log(strongPassword("sth!"))
console.log(strongPassword("bd"))
console.log(strongPassword("d"))
console.log(strongPassword("[?"))
      `,
    },
    {
      id: '4',
      tittle: "Consecutive Number Series",
      introduce: "Arrays, loops, numbers, sorting, validation",
      intro: `
Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive numbers (regardless of orientation: whether ascending or descending), otherwise, return false.

Examples
isConsecutive("121314151617") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 2's : 12, 13, 14, 15, 16, 17

isConsecutive("123124125") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 3's : 123, 124, 125

isConsecutive("32332432536") ➞ false
// Regardless of the grouping size, the numbers can't be consecutive.

isConsecutive("326325324323") ➞ true
// Contains a set of consecutive descending numbers
// if grouped into 3's : 326, 325, 324, 323

isConsecutive("667666") ➞ true
// Consecutive descending numbers: 667 and 666.

isConsecutive("999897959493") ➞ false
      `,
      html: ``,
      css: ``,
      js: `
function isConsecutive(s) {
  for (let i = 1; i <= s.length/2; i++) {
    const reg = new RegExp(\`.{\${i}}\`,"g")
    let x = s.match(reg).map(x => parseInt(x))
    if (x[0] !== x[x.length-1] && Math.abs(x[0]-x[x.length-1]) === x.length-1 && x.reduce((acc,cur) => acc+cur,0)/x.length === (x[0]+x[x.length-1])/2) {
      if (x.sort().join('') === s || x.sort((a,b) => b-a).join('') === s) {
          return true
      }
    }
  }
  return false
}

console.log(isConsecutive('999897959493'))
      `,
    },
  ];
  return (
    <main>
      <div className={home.exampleContainer}>
        <h1 className={home.heading}>Javascript</h1>
          <p>iframe doesn't have the ability to detect infinite loop function so be careful!!!</p>
        {
          JsCode.map(x => <ExJs ex={x} key={x.id}/>)
        }
      </div>
    </main>
  );
}
