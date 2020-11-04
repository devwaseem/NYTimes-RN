import React from 'react';
import { Text } from 'react-native'
import { WebView } from 'react-native-webview';
import { NYTimesTopStory } from '../../Models/NYTimesModels';


const NewsDetailScreen = ({route, navigation}) => {

    let story: NYTimesTopStory = route.params.story

    return (
        <WebView source={{uri:story.url}}/>
    )
}

export default NewsDetailScreen