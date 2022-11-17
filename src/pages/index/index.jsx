/*
 * @Author: SunLin
 * @Date: 2022-07-04 14:10:38
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-17 17:11:47
 * @Description: 
 */
import React, { useState, useEffect, useReducer, Component } from 'react'
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { observer } from 'mobx-react'

import './index.styl'
import dataStore from '../../store/counter';


const Index = observer((prop) => {
  const [i, seti] = useState(0);
  useEffect(() => {
    seti(dataStore.counter);
  })

  const clickFunc = (type) => {
    if (type === "add") {
      dataStore.counterStore();
    } else if (type === "addparams") {
      dataStore.counterParams(25);
    } else {
      dataStore.decrement();
    }
  }

  useDidShow(() => {
    //dataStore.changeSelected(0);
  })
  return (
    <View>
      <Button onClick={() => { clickFunc("addparams") }}>add addparams</Button>
      <Button onClick={() => { clickFunc("add") }}>add count</Button>
      <View>counter:{dataStore.counter}</View>
      <View>i:{i}</View>
      <Button onClick={() => { clickFunc("reduce") }}>reduce count</Button>
    </View>
  )
})
export default Index
