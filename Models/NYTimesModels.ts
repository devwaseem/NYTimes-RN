
class NYTimesTopStory {
        section: string
        title: string
        author: string
        date: string
        url:string
        imageUrl:string

        constructor(section: string,title: string, author: string, date: string, url: string, imageUrl:string) {
            this.section = section
            this.title = title
            this.author = author
            this.date = date
            this.imageUrl = imageUrl
            this.url = url
        }

}

class NYTimesGroupedTopStories {
    section: string
    stories: NYTimesTopStory[]

    constructor(section: string, stories: NYTimesTopStory[]) {
        this.section = section
        this.stories = stories
    }

}

export { NYTimesTopStory,  NYTimesGroupedTopStories}