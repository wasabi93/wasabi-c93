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
      tittle: "Simplify List",
      introduce: "Reduce duplicate items and add count property",
      intro: "",
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
      introduce: "Create a function that determines the minimum number of characters needed to make a strong password.",
      intro: `
A password is considered strong if it satisfies the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character: !@#$%^&*()-+
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
      tittle: "",
      introduce: "",
      intro: "",
      html: ``,
      css: ``,
      js: ``,
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
