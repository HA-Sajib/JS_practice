// function sum(a,b){
//     const c = a+b;
//     return c;
// }

// let r1 = sum(10,20)
// let r2 = sum(30,40)
// let r3 = sum(50,60)

// console.log(r1,r2,r3)

// How To Find The Perimeter Of A Rectangle

// function paraMeterOfRactangle(h,w){
//     let height = h*2
//     let weidth = w*2
//     const paraMeter = height + weidth;
//     return paraMeter;
// }

// let r2 = paraMeterOfRactangle(2,2);
// console.log(r2)

// function RectangleParameter(h,w){
//     let height = 2*h;
//     let weidth = 2*h;
//     let paraMeter = height + weidth;
//     return paraMeter;
// }

// let r1 = RectangleParameter(10,20)
// let r2 = RectangleParameter(30,20)
// let r3 = RectangleParameter(40,22)

// console.log(r1,r2,r3)

function RectangleParameter(height,width){
    let paraMeter = 2*(height + width)// (2*height) + (2*width)
    return paraMeter;
}

let paraMeter = RectangleParameter(10,20)
console.log(paraMeter)