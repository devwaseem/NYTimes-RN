
class NYTimesTopStory {
        section: string
        title: string
        author: string
        date: string
        url:string
        imageUrl:string
        bookmarked: boolean

        constructor(section: string,title: string, author: string, date: string, url: string, imageUrl:string) {
            this.section = section
            this.title = title
            this.author = author
            this.date = date
            this.imageUrl = imageUrl
            this.url = url
            this.bookmarked = false
        }


}


export { NYTimesTopStory }