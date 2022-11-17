/*
 * @Author: SunLin
 * @Date: 2022-11-04 14:36:27
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-04 17:29:22
 * @Description: 
 */
import React, { useState, useEffect, useReducer, Component } from 'react'
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Image, Progress, Swiper, SwiperItem, Picker, Canvas, Text, Button } from '@tarojs/components';
import { observer, inject } from 'mobx-react'

import './home.styl'
import counterStore from '../../store/counter';

const Home = observer((prop) => {
    console.log("prop", prop);

    useDidShow(() => {
        //counterStore.changeSelected(1);
    })
    return (
        <View>
            home page
        </View>
    )
})
export default Home
