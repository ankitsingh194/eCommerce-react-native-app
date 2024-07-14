import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'
import { useScrollToTop } from '@react-navigation/native'
import { SIZES,COLORS } from '../../constants'

const slides =[
    "../../assets/images/slider1.jpg",
    "../../assets/images/slider2.jpg",
    "../../assets/images/slider3.jpg",
    "../../assets/images/slider4.jpg"
      
]



const Carousel = () => {
  const [imgActive, setimgActive] = useState(0);

  onchange  = (nativeEvent) => {
    if(nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imgActive){
            setimgActive(slide);
        }
    }


  }


  return (
    <SafeAreaView>
    <View style={styles.carouseContainer}>
     <ScrollView
     onScroll={({nativeEvent}) => onchange(nativeEvent)} 
     showsHorizontalScrollIndicator={false}
     pagingEnabled
     horizontal
     style={styles.wrap}
     >
        {
            slides.map((e) => 
               // console.log(e)
            <Image 
            key={e}
            resizeMode='stretch'
            source={require('../../assets/images/fn6.jpg')}
            style={{width:350,height:190, borderRadius:10,margin:2}}
             />)
        }

     </ScrollView>
     <View style={styles.wrapDot}>
        {
            slides.map((e , index) => 
            <Text
            key={e}
            style={imgActive == index ? styles.dotActive : styles.dot}
            >
              ⬤
            </Text>
            )
        }

     </View>
    </View>
    </SafeAreaView>
  );
};

export default Carousel

const styles = StyleSheet.create({
    carouseContainer:{
        flex:1,
        alignItems:'center'
    },
    wrap:{
        width:SIZES.medium*22,
        height:SIZES.medium*12,
        borderRadius:10
        

    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
        margin:3,
        color:COLORS.gray

    },
    dot:{
        margin:3,
        color:'white'
       

    }

})