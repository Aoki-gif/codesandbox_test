/**
 * const,let
 *
 */

// var vall = "aaaa";
// console.log(vall);

// //var変数は上書き可能
// vall ="bbbbbb";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //let 上書き可能
// val2 = "let11111111";
// console.log(val2);

// ★constで定義したオブイジェクトはプロパティ変更が可能
// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "oooo",
//   age: 28
// };

// val4.name = "aaaaa";
// val4.addres = "iiiii";
// console.log(val4);

// ★constで定義した配列はプロパティ変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 *
 */
// const name = "aaa";
// const age = 28;

// const maeesage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(maeesage2);

/**
 * アロー関数
 *
 */

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//　アロー関数
// ()を省略できるけど、保存すると勝手に()がつくこともある
// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 *
 */

// const myProfile = {
//   name: "a",
//   age: 28
// };

// const maeesage1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(maeesage1);

// const { name, age } = myProfile;
// const maeesage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(maeesage2);

// const myPro = ["aa", 28];
// const maeesage1 = `私の名前は${myPro[0]}です。年齢は${myPro[1]}です。`;
// console.log(maeesage1);
// const [name, age] = myPro;
// const maeesage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(maeesage2);

/**
 * デフォルト値
 *
 */

// const sayHello = (name = "noname") => console.log(`${name}です。`);
// sayHello("a");

/**
 * すっぷレッド構文
 *
 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map
 *
 */
// const nameArr = ["a", "b", "c"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newnumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "c") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 *
 */
// ある条件？条件がTrueの時　：条件がfalseの時
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formatNum =
//   typeof num === "number" ? num.toLocaleString() : "数値入力してください";
// console.log(formatNum);

// const chkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100 ijyo" : "kyoyouti";
// };
// console.log(chkSum(30, 60));

/**
 * 論理演算子の本当の意味を知る
 *
 */

// const flg1 = true;
// const flg2 = false;

// if (flg1 || flg2) {
//   console.log("1 or 2 ture desu");
// }

// if (flg1 && flg2) {
//   console.log("1 and 2 ture desu");
// }

/**
 *  || の左側がFalseになるとき、右を返す
 */
// const num = null;
// const fee = num || "金額未指定";
// console.log(fee);

/**
 *  ＆＆ の左側がTrueになるとき、右を返す
 */
// const num2 = 100;
// const fee2 = num2 && "何か設定されている";
// console.log(fee2);
