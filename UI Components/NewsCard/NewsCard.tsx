import { faBookmark, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import FontAwesomeIconButton from '../../UI Components/FontAwesomeIconButton'

interface NewsCardProps {
    // properties
    imageUrl: string
    title: string
    author: string
    date: string
    bookmarkIconHidden?: Boolean
    bookmarked?: Boolean
    deleteMode?: Boolean
    // functions
    onPress?: ()=>void
    onBookmarkPressed?: ()=>void
    onDeletePressed?: ()=>void
}

const NewsCard: React.FC<NewsCardProps> = ({imageUrl,title, author, date, bookmarked, bookmarkIconHidden, deleteMode, onPress, onBookmarkPressed, onDeletePressed}) => (

    <Pressable style={styles.card} onPress={onPress}>
        <Image
        source = {{
            uri: imageUrl
        }}
        width = {200}
        height = {200}
        style={styles.image}
        />
        <View style={styles.textContainer}>
            <Text style={styles.title}>
            {title}
            </Text>
            <View style={styles.secondaryContainer}>
                <View style={styles.metaContentContainer}>
                    <Text style={styles.author}>
                    {author}
                    </Text>
                    <Text style={styles.date}>
                    {date}
                    </Text>
                </View>
                <View style={styles.bookmarkIconContainer}>
                    { bookmarkIconHidden ? null : 
                    <FontAwesomeIconButton 
                        icon = {deleteMode ? faTrash :faBookmark}
                        iconSize = {20}
                        iconColor = {deleteMode ? "rgba(255,50,50,1)" : bookmarked ? "rgba(0,0,0,1)":"rgba(0,0,0,0.15)"}
                        onPress = {deleteMode ? onDeletePressed : onBookmarkPressed}
                    />
                    }
                </View>
            </View>
        </View>
    </Pressable>

)


const styles = StyleSheet.create({

    card: {
        height: 300,
        marginHorizontal: 16,
        backgroundColor:'white',
        borderRadius:10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: 'rgb(90,140,172)',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        marginTop: 16

    },

    image: {
        height:"60%",
        borderTopRightRadius:10, 
        borderTopLeftRadius:10,
    },

    textContainer: {
        marginHorizontal: 18,
    },

    title: { 
        marginTop:16,
        fontSize: 18,
        fontWeight: "600",
        height: 46
    },

    secondaryContainer: {
        flexDirection:'row'
    },

    metaContentContainer: {
        flex:10
    },

    bookmarkIconContainer: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    author: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 4,
        color:'rgba(0,0,0,0.9)',
        height:16

    },

    date: {
        fontSize: 12,
        fontWeight: "600",
        color:'gray'
    }

})

export default NewsCard;

