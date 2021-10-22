for(let i=0 ; i<5 ; i=i+1 ){
    console.log("Hello!!!!")
}
// 5VM4929:2 Hello!!!!
// undefined
const classmates = ["철수", "영희", "훈이"]
// undefined
for(let i=0 ; i<3 ; i=i+1){
    console.log(classmates[0] + "입니다!!!")
}
// 3VM5765:2 철수입니다!!!
// undefined
for(let i=0 ; i<3 ; i=i+1){
    console.log(classmates[i] + "입니다!!!")
}
// VM5810:2 철수입니다!!!
// VM5810:2 영희입니다!!!
// VM5810:2 훈이입니다!!!
// undefined
for(let i=0 ; i<classmates.length ; i=i+1){
    console.log(classmates[i] + "입니다!!!")
}
// VM5870:2 철수입니다!!!
// VM5870:2 영희입니다!!!
// VM5870:2 훈이입니다!!!
// undefined
for(let i=0 ; i<classmates.length ; i++){
    console.log(classmates[i] + "입니다!!!")
}
// VM5900:2 철수입니다!!!
// VM5900:2 영희입니다!!!
// VM5900:2 훈이입니다!!!
// undefined
for(let i=0 ; i<classmates.length ; ++i){
    console.log(classmates[i] + "입니다!!!")
}
// VM5915:2 철수입니다!!!
// VM5915:2 영희입니다!!!
// VM5915:2 훈이입니다!!!
// undefined

const classmates2 = [
    { name: "철수", age: 10, school: "다람쥐초등학교" },
    { name: "영희", age: 11, school: "공룡초등학교" },
]
// undefined
classmates2[1].age
// 11
const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
// undefined
fruits[0].number
// 1
fruits[0].title
// '레드향'
fruits[0].number + fruits[0].title
// '1레드향'
fruits[0].number + " " + fruits[0].title
// '1 레드향'
fruits[1].number + " " + fruits[1].title
// '2 샤인머스켓'
fruits[2].number + " " + fruits[2].title
// '3 산청딸기'
for(let i=0; i<10; i=i+1){
    fruits[0].number + " " + fruits[0].title
}
// '1 레드향'
for(let i=0; i<10; i=i+1){
    fruits[i].number + " " + fruits[i].title
}
// '10 귤'
for(let i=0; i<10; i=i+1){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM9627:2 1 레드향
// VM9627:2 2 샤인머스켓
// VM9627:2 3 산청딸기
// VM9627:2 4 한라봉
// VM9627:2 5 사과
// VM9627:2 6 애플망고
// VM9627:2 7 딸기
// VM9627:2 8 천혜향
// VM9627:2 9 과일선물세트
// VM9627:2 10 귤
// undefined
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM9706:2 1 레드향
// VM9706:2 2 샤인머스켓
// VM9706:2 3 산청딸기
// VM9706:2 4 한라봉
// VM9706:2 5 사과
// VM9706:2 6 애플망고
// VM9706:2 7 딸기
// VM9706:2 8 천혜향
// VM9706:2 9 과일선물세트
// VM9706:2 10 귤
// undefined