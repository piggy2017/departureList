/*
 * @Author: SunLin
 * @Date: 2022-07-04 14:10:38
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-04 17:17:26
 * @Description: 
 */
import { observable } from 'mobx'

const counterStore = observable({
  counter: 100,
  counterStore() {
    this.counter++
  },
  counterParams(count){
    this.counter=this.counter+count;
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },


  selected:0,
  changeSelected(index){
    this.selected=index;
  }
})

export default counterStore