import React from 'react'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'

interface NewsCardProps {
    imageUrl: string
    title: string
    author: string
    date: string
    onPress?: ()=>void
}

const NewsCard: React.FC<NewsCardProps> = ({imageUrl,title, author, date,onPress}) => (

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
            <Text style={styles.author}>
            {author}
            </Text>
            <Text style={styles.date}>
            {date}
            </Text>
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

