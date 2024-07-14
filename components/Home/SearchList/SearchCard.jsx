import { View, Text, TouchableOpacity ,TextInput, Image} from 'react-native';
import React from 'react'
import styles from './searchcard.style'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants';

const SearchCard = ({item, quantity}) => {
   const navigation = useNavigation();
   console.log(item,'j=j')
    
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.wrapper}  onPress={()=> navigation.navigate("ProductDetail",{item})}  >
        
       <Image source={require('../../../assets/images/slider2.jpg')} style={{width: 100, height: 100,borderRadius:15}}/>
      
        <View style={styles.details}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}>${item?.Price}</Text>
            <Text style={styles.supplier}>{item?.supplier}</Text>
            <Text style={styles.supplier}>quantity : {quantity ? quantity: 0 }</Text>
            
        </View>

    </TouchableOpacity>
    </View>
  )
}


export default SearchCard