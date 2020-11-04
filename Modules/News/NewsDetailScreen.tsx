import { faArrowLeft, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, Dimensions, View } from 'react-native'
import { WebView } from 'react-native-webview';
import { NYTimesTopStory } from '../../Models/NYTimesModels';
import FontAwesomeIconButton from '../../UI Components/FontAwesomeIconButton';
import * as Actions from '../../Redux/Actions'

const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

const NewsDetailScreen = () => {
    
    let route = useRoute<any>()
    let navigation = useNavigation()
    let story: NYTimesTopStory = route.params.story

    const [bookmarked, changeBookmarkStatus] = useState(false)

    console.log(story.bookmarked)
    function toggleBookmark(){
        if(story.bookmarked) {
            story.bookmarked = false
            changeBookmarkStatus(false)
            return Actions.deleteBookmark(story)
        }
        
        story.bookmarked = true
        changeBookmarkStatus(true)
        return Actions.addBookmark(story)
    }

    useEffect(() => {
        changeBookmarkStatus(story.bookmarked)
    }, [bookmarked])

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <SafeAreaView>
                <View style={{flexDirection:'row',marginHorizontal:16, marginBottom: 16, justifyContent:'space-between'}}>
                    <FontAwesomeIconButton
                    icon={faArrowLeft}
                    iconSize={20}
                    onPress={()=>navigation.goBack()}
                    />
                    <FontAwesomeIconButton 
                        icon = {faBookmark}
                        iconSize = {20}
                        iconColor = {bookmarked ? "rgba(0,0,0,1)":"rgba(0,0,0,0.15)"}
                        onPress = {toggleBookmark}
                    />
                </View>
            </SafeAreaView>
            <WebView source={{uri:story.url}}/>
        </View>
        
    )
}

export default NewsDetailScreen