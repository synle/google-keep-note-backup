import Calc from 'src/Calc';

export function doWork() {
  console.log('======= Named Module Export');
  console.log(Calc.sum(1, 2));
  console.log(Calc.sum(2, 3));
  console.log(Calc.sum(6, 4));
  console.log(Calc.sum(3, 5));
  console.log('============================');
}

export default function doDefaultWork() {
  console.log('======= Default Export');
  console.log(Calc.sum(1, 2));
  console.log(Calc.sum(2, 3));
  console.log(Calc.sum(6, 4));
  console.log(Calc.sum(3, 5));
  console.log('============================');
}
