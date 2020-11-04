import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, SafeAreaView, Dimensions} from 'react-native'
import { NYTimesTopStory } from '../../Models/NYTimesModels';
import NewsCard from '../../UI Components/NewsCard/NewsCard';
import Store from '../../Redux/Redux'
import * as Actions from '../../Redux/Actions'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIconButton from '../../UI Components/FontAwesomeIconButton';

const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

const BookmarkScreen = () => {

    const navigation = useNavigation()

    const [sectionData, changeSectionData] = useState(()=>{
        let result: NYTimesTopStory[] = []
        return result
    })

    function openDetailNews(story: NYTimesTopStory){
        // Alert.alert(story.title)
        navigation.navigate('NewsDetailScreen', {
            story: story
        })
    }

    useEffect(()=>{
        let unsubscribe = Store.subscribe(()=>{
            let stories = Store.getState().bookmarkedStories as NYTimesTopStory[]
            changeSectionData(stories)
        })
        return () => {
            unsubscribe()
        }
    })

    useEffect(()=>{
        let stories = Store.getState().bookmarkedStories as NYTimesTopStory[]
        changeSectionData(stories)
    })

    return (
        <View style={{flex:1}}>
            <SafeAreaView style={{marginTop: isPortrait() ? 60 : 30}}>
                <View style={{flexDirection:'row', alignItems: 'center',marginLeft:16}}>
                    <FontAwesomeIconButton
                    icon={faArrowLeft}
                    iconSize={20}
                    onPress={()=>navigation.goBack()}
                    />
                    <Text style={{fontSize:28, fontWeight:'bold', marginLeft:16}}>
                    Bookmarks 
                    </Text>
                </View>
            </SafeAreaView>
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            {
                    sectionData.length == 0 ?
                    <Text style={{fontSize:26, fontWeight: "bold", marginBottom: 50, color:"lightgray"}}>
                        No Bookmarks saved
                    </Text>
                    :
                    <FlatList
                    style={{width:'100%', marginTop:24}}
                    keyExtractor={(_,index)=>index.toString()}
                    data={sectionData}
                    renderItem={({item})=>
                    
                    <NewsCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        author = {item.author}
                        date = {item.date}
                        onPress = {()=>openDetailNews(item)}
                        deleteMode
                        onDeletePressed = {()=>Actions.deleteBookmark(item)}
                    />
                    
                }
                />
                }
            </View>
        </View> 
        
    )

}

export default BookmarkScreen

