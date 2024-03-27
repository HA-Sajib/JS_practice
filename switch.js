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