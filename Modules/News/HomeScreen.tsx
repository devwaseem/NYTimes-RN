import {faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef  } from 'react';
import { View,Text, FlatList, Alert, SafeAreaView, Dimensions } from 'react-native';
import {NYTimesTopStory} from '../../Models/NYTimesModels'
import { NYTimesApiService } from '../../Services/NYTimesApiService';
import FontAwesomeIconWithBadgeButton from '../../UI Components/FontAwesomeIconWithBadgeButton';
import NewsCard from '../../UI Components/NewsCard/NewsCard';
import SectionTitleComponent from '../../UI Components/SectionTitleComponent/SectionTitleComponent';
import styles from './Styles'
import Store from '../../Redux/Redux'
import * as Actions from '../../Redux/Actions'

const Sections: string[] = ["science", "sports", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]


const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

const NewsHomeScreen = () => {
    let navigation = useNavigation()
    const [bookmarkedStoriesCount, changeBookmarkedStoriesCount] = useState(0)
    const [selectedSection, changeSelectedSection ] = useState(0)
    const [sectionData, changeSectionData] = useState(()=>{
        let result: NYTimesTopStory[] = []
        return result
    })

    let flatListRef = useRef<FlatList<string> | null>()
    
    

    useEffect(()=>{
        let unsubscribe = Store.subscribe(()=>{
            let length = Store.getState().bookmarkedStories.length ?? 0
            changeBookmarkedStoriesCount(length)
            processSectionData(sectionData)
        })
        return () => {
            unsubscribe()
        }
    })

    useEffect(() => {
        changeSectionData([]);
        if(flatListRef.current) {
            let scrollToIndex = Math.max(0, selectedSection-1)
            flatListRef.current.scrollToIndex({animated: true,index:scrollToIndex});
        }
        ( async () => {
            let data = await NYTimesApiService.shared().getSectionData(Sections[selectedSection])
            processSectionData(data)
        })();
    }, [selectedSection])

    function getBookmarkedStories(){
        return Store.getState().bookmarkedStories
    }

    function processSectionData(stories: NYTimesTopStory[]) {
        let bookmarkedUrls: string[] = getBookmarkedStories().map((item:NYTimesTopStory)=>item.url)
        for(let i=0; i<stories.length; i++){
            if (bookmarkedUrls.includes(stories[i].url)) {
                stories[i].bookmarked = true
            }else {
                stories[i].bookmarked = false
            }
        }
        changeSectionData(stories) 
    }

    function openDetailNews(story: NYTimesTopStory){
        // Alert.alert(story.title)
        navigation.navigate('NewsDetailScreen', {
            story: story
        })
    }

    function openBookmarkScreen(){
        navigation.navigate('BookmarksScreen')
    }

    function toggleBookmarkFor(story: NYTimesTopStory){
        if(story.bookmarked) {
            story.bookmarked = false
            return Actions.deleteBookmark(story)
        }
        
        story.bookmarked = true
        return Actions.addBookmark(story)

    }

    
    return (
        <View style={{flex:5}}>
            
            <SafeAreaView style={{marginTop: isPortrait() ? 70 : 30}}>
            <View style={{flexDirection: 'row'}}>
            <View style={{flex:1}}>
                <Text style={styles.title}>
                Hey, Waseem 👋 
                </Text>
                <Text style={styles.subtitle} >
                    Enjoy the best picks
                </Text>
            </View>
            <View style={{flex:0.24, alignItems:'center', paddingTop:8}}>
            <FontAwesomeIconWithBadgeButton
                icon={faBookmark}
                iconColor="rgba(0,100,255,1)"
                iconSize={22}
                onPress={openBookmarkScreen}
                badgeCount={bookmarkedStoriesCount}
                badgeColor="orange"
            />
                
            </View>
            </View>
            <FlatList
                horizontal
                style={styles.rootFlatList}
                ref={(ref)=> {flatListRef.current = ref}}
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
            </SafeAreaView>
            <View style={{flex:100, alignItems:'center', justifyContent:'center'}}>                
                {
                    sectionData.length == 0 ?
                    <Text style={{fontSize:30, fontWeight: "bold"}}>Loading...</Text>
                    :
                    <FlatList
                    style={{paddingBottom:50}}
                    keyExtractor={(_,index)=>index.toString()}
                    data={sectionData}
                    renderItem={({item})=>
                    
                    <NewsCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        author = {item.author}
                        date = {item.date}
                        onPress = {()=>openDetailNews(item)}
                        bookmarked={item.bookmarked}
                        onBookmarkPressed = {()=>toggleBookmarkFor(item)}
                    />
                    
                }
                />
                }
                
            </View>
                
        </View> 
    )
    
}

export default NewsHomeScreen