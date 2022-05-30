 import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  even: any;
  constructor() {

    const number = of(23, 12, 45, 67, 32, 86, 100, 33, 21);


    /*  Displaying array of Even numbers by using map()  */
 
    const evenNumbers = map((value: number) => value %2 == 0);
    const even_Num_Result = evenNumbers(number);
    even_Num_Result.subscribe(x =>

      console.log("even numbers :", x));

    /*  Displaying array of Odd numbers by using map()  */


    const oddNumbers = map((value: number) => value % 2 !== 1);
    const odd_Num_Result = oddNumbers(number);
    odd_Num_Result.subscribe(data =>


      console.log("odd numbers :", data));

    /*  Displaying array of square numbers by using map()  */

    const squareNumbers = map((value: number) => value * value);
    const squareNumbersResult = squareNumbers(number);
    squareNumbersResult.subscribe(data =>
      console.log("square numbers",data));

    /*  Displaying the array by multiply the numbers by 2 using map()  */
     
    const multiplyNum = map((value: number) => value * 2);
    const multiplyResult = multiplyNum(number);
    multiplyResult.subscribe(data =>

      console.log("multiply by 2", data));


    /*  Displaying array of Even numbers by using filter()  */
    const filter_Numbers = from([10, 45, 78, 23, 54, 7, 76])
    const even_num = filter_Numbers.pipe(filter(num => num % 2 === 0));
    even_num.subscribe(value =>

      console.log("Even numbers is",value))


     
      const filter_odd = filter_Numbers.pipe(filter(num =>num %2 ==1));
     filter_odd.subscribe(value =>
     
      console.log("Odd numbers is",value))


    //   const filter_square = filter_Numbers.pipe(filter(num =>num * num));
    //  filter_square.subscribe(value =>
     
    //   console.log("Square numbers is",value))
  

    //   const filter_multiply = filter_Numbers.pipe(filter(num =>num  * 2));
    //  filter_multiply.subscribe(value =>
     
    //   console.log("Square numbers is",value))
  
  }
   
  



  ngOnInit(): void {
  }


}
