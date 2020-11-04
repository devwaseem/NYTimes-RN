import React, { useState, useEffect } from 'react';
import { View,Text, FlatList, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {NYTimesTopStory, NYTimesGroupedTopStories} from '../../Models/NYTimesModels'
import { NYTimesApiService } from '../../Services/NYTimesApiService';

import NewsCard from '../../UI Components/NewsCard/NewsCard';
import SectionTitleComponent from '../../UI Components/SectionTitleComponent/SectionTitleComponent';
import styles from './Styles'




const Sections: string[] = ["science", "sports", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]



const NewsHomeScreen = ({navigation}) => {

    const [selectedSection, changeSelectedSection ] = useState(0)
    const [sectionData, changeSectionData] = useState(()=>{
        let result: NYTimesTopStory[] = []
        return result
    })

    useEffect(() => {
        changeSectionData([]);
        ( async () => {
            let data = await NYTimesApiService.shared().getSectionData(Sections[selectedSection])
            changeSectionData(data)
        })();
    }, [selectedSection])

    function openDetailNews(story: NYTimesTopStory){
        // Alert.alert(story.title)
        navigation.navigate('NewsDetailScreen', {
            story: story
        })
    }

    return (
        <>
        <View style={{flex:0.5}}/>
        <View style={{flex:5}}>
            <Text 
            style={styles.title}
            >
              Hey, Waseem 👋
            </Text>
            <Text
            style={styles.subtitle}
            >
                Enjoy the best picks
            </Text>
            <FlatList
                style={styles.rootFlatList}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Sections}
                renderItem = {({item,index})=> 
                    <SectionTitleComponent 
                        title={item}
                        index={index}
                        selectedIndex={selectedSection}
                        onPress = { ()=> changeSelectedSection(index)}
                    />
                }
                keyExtractor= {(item: String ,index: number) => index.toString()}
            />
            <View style={{flex:100, alignItems:'center', justifyContent:'center'}}>                
                {
                    sectionData.length == 0 ?
                    <Text style={{fontSize:30, fontWeight: "bold"}}>Loading...</Text>
                    :
                    <FlatList
                    keyExtractor={(item,index)=>index.toString()}
                    data={sectionData}
                    renderItem={({item})=>
                    <NewsCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        author = {item.author}
                        date = {item.date}
                        onPress = {()=>openDetailNews(item)}
                    />
                }
                />
                }
                
            </View>
                
        </View> 
        </>
    )
    
}

export default NewsHomeScreen