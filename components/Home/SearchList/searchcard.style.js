import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'95%',
        backgroundColor:COLORS.lightWhite,
        padding:6,
        borderRadius:SIZES.medium,
        marginLeft:12,
        marginBottom:10,
        

    },
    wrapper:{
        margin:10,

    },
    image:{
        width:70,
        height:70,
        backgroundColor:COLORS.green,
        zIndex:9999,
       
        

    },
    Productimage:{
        width:75,
        height:75,
        borderRadius:SIZES.small,
        resizeMode:"cover"


    },
    details:{
        marginLeft:SIZES.medium*8,
        marginTop:-SIZES.medium*7,
        padding:3,
        gap:2,

    },
    title:{
        fontSize:SIZES.medium,
        fontWeight:'bold',
        color:COLORS.primary,
        marginTop:7


    },
    price:{
        fontSize:SIZES.small + 2,
        fontWeight:'regular',
        color:COLORS.gray,
        marginTop:3


    },
    supplier:{
        fontSize:SIZES.small + 2,
        fontWeight:'regular',
        color:COLORS.gray,
        marginTop:3

    },
    trashbtn:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:SIZES.large*16,
        zIndex:1000,
        marginTop:-20*3,

    },
    searchImage:{
        resizeMode:'contain',
        marginTop:SIZES.medium,  
        width:SIZES.large*5,
        height:SIZES.large*20,
    
    },
    itemcart:{
        marginLeft:20*8,
        

    },
    itemcarttitle:{
        fontSize:SIZES.medium,
        fontWeight:'bold',
        color:COLORS.primary,
        marginTop:-10*9,
        marginRight:10*2,


    },
    checkout:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -10,
        top:5
       
        

    },
    texttitle:{
        fontWeight:'bold',
        fontSize:16,
        color:COLORS.primary,
        marginLeft:SIZES.small,
        marginRight:SIZES.small,


    },
    texttitle2:{
        fontWeight:'normal',
        fontSize:13,
        color:COLORS.primary,
        marginLeft:SIZES.small,
        marginRight:SIZES.small,


    },
    checkoutbtn:{
        flexDirection:"row",
        justifyContent:"center",
        width:'90%',
        padding:20,
        borderRadius:30,
        backgroundColor:COLORS.secondary,
        marginHorizontal:18,
        marginTop:10
    },
    checkoutcontainer:{
        marginTop:10,
        
    }


})



export default styles