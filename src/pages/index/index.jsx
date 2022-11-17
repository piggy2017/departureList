/*
 * @Author: SunLin
 * @Date: 2022-07-04 14:10:38
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-04 17:28:56
 * @Description: 
 */
import React, { useState, useEffect, useReducer, Component } from 'react'
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { observer } from 'mobx-react'

import './index.styl'
import counterStore from '../../store/counter';


const Index = observer((prop) => {
  const [i, seti] = useState(0);
  useEffect(() => {
    seti(counterStore.counter);
  })

  const clickFunc = (type) => {
    if (type === "add") {
      counterStore.counterStore();
    } else if (type === "addparams") {
      counterStore.counterParams(25);
    } else {
      counterStore.decrement();
    }
  }

  useDidShow(() => {
    //counterStore.changeSelected(0);
  })
  return (
    <View>
      <Button onClick={() => { clickFunc("addparams") }}>add addparams</Button>
      <Button onClick={() => { clickFunc("add") }}>add count</Button>
      <View>counter:{counterStore.counter}</View>
      <View>i:{i}</View>
      <Button onClick={() => { clickFunc("reduce") }}>reduce count</Button>
    </View>
  )
})
export default Index
