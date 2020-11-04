
import React from 'react';
import {
    TouchableOpacity    
  } from 'react-native';
  import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

const FontAwesomeIconButton = (props) => {

    return (
    <TouchableOpacity
    onPressOut = { props.onPress }
    >
        <FontAwesomeIcon 
            icon={props.icon} 
            color={props.iconColor} 
            size={props.iconSize}
            style={props.iconStyle} 
        />
    </TouchableOpacity>
    )

}


export default FontAwesomeIconButton