
import React from 'react';
import {
    TouchableOpacity , Text, View   
  } from 'react-native';
  import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

interface FontAwesomeIconWithBadgeButton {
    icon:any
    iconColor: string
    iconSize: number
    iconStyle?: any
    badgeCount: number
    badgeColor: string

    onPress: ()=>void
}

const FontAwesomeIconWithBadgeButton: React.FC<FontAwesomeIconWithBadgeButton> = ({icon, iconColor, iconSize, iconStyle, badgeCount, badgeColor, onPress}) => {

    return (
    <TouchableOpacity
    onPressOut = { onPress }
    >
        <FontAwesomeIcon 
            icon={icon} 
            color={iconColor} 
            size={iconSize}
            style={iconStyle} 
        />
        <View style={{backgroundColor: badgeColor, position:'absolute',left:10,top:-10 ,width:20, height:20, borderRadius:100, justifyContent:'center'}}>
                    <Text style={{fontSize:14, textAlign:'center', fontWeight:'bold'}}>
                        {badgeCount}
                    </Text>
                </View>
    </TouchableOpacity>
    )

}


export default FontAwesomeIconWithBadgeButton