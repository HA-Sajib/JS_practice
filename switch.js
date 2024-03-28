const day = 4

switch(day){
    case(0):
    console.log('saturday');
    break;

    case(1):
    console.log('sunday');
    break;

    case(2):
    console.log('monDay');
    break;

    case(3):
    console.log('thuesday');
    break;

    case(4):
    console.log('wednesday');
    break;

    case(5):
    console.log('Thursday');
    break;

    case(6):
    console.log('friday');
    break;

    default:
        throw new Error('Invalid Day');
}


// conditional statement

const theme = 'dak'
let bgColor = theme == 'dark' ? "#11111" :" #fefefe"; // question mark true or false return korbe. jodi true hoy colon er ager ongso kaj korbe, false hole clone er porer ongso kaj korbe. clone , semi clone is called conditional operator.
console.log(bgColor)

// if(theme == 'dark'){
//     console.log("bg color #111111")
// } else{
//     console.log('bg color #fefefe')
// }
