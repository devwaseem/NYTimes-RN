import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './Styles'

interface Props {
    title: String
    index: number
    selectedIndex: number
    onPress: () => void
}

const SectionTitleComponent: React.FC<Props> = ({title, index, selectedIndex, onPress}) => {
    const capitalisedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    const activeStyle = index == selectedIndex ? styles.sectionTitleActive : styles.sectionTitleInActive
    return (
        <>
        <TouchableOpacity
        onPress = {onPress}
        >
            <Text style={[styles.sectionTitle, activeStyle]}>{capitalisedTitle}</Text>
        </TouchableOpacity>
        </>
    )
}

export default SectionTitleComponent