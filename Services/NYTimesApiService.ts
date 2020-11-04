import axios from 'axios'
import {NYTimesTopStory} from '../Models/NYTimesModels'



export class NYTimesApiService {

    

    baseUrl = "https://api.nytimes.com/"
    apiKey = "3bHXOhbb2XcBMATrdFi7L5VDu5abt8bP"
    
    static shared(): NYTimesApiService {
        return new NYTimesApiService()
    }

    getSectionUrl(section: string) {
        return this.baseUrl + `svc/topstories/v2/${section}.json`
    }

    async getSectionData(section: string): Promise<NYTimesTopStory[]> {
        let url = this.getSectionUrl(section)
        try {
            let response = await axios.get(url, {
                params: {
                    "api-key":this.apiKey
                }
            })
            
            let results = response.data.results
            let topStories: NYTimesTopStory[] = []
            // console.log(results[0])
            results.forEach((element: any) => {
                let section: string = element.section
                let title: string = element.title
                let url: string = element.url
                let author: string = element.byline
                let date: string = element.published_date
                let imageUrl: string = ""
                if (element.multimedia && element.multimedia.length > 0) {
                    imageUrl = element.multimedia[0].url
                }else{
                    return
                }
                if( author === "" ){
                    author = "unknown"
                }
                let object = new NYTimesTopStory(section, title, author, date,url,imageUrl)
                topStories.push(object)
                // console.log(object)
            })
            // console.log("returning :" + topStories)
            return topStories
        }catch (error) {
            console.log(error)
            return []
        }
    }
    
}