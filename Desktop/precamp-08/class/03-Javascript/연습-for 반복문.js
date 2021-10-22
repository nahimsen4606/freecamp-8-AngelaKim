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