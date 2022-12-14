// Create the Dog class here


export default class Dog {
    constructor(data) {
        Object.assign(this, data)
        
    }
    
    getDogHtml(){
        
        const badgeImage = this.hasBeenSwiped? this.hasBeenLiked ? `<img class="badge" src="images/badge-like.png" />` : `<img class="badge" src="images/badge-nope.png" />`:``
        
        return `
            <div class="avatar-container">
                <img class="avatar" src="${this.avatar}" />
                ${badgeImage}
                <h2 class="dog-name">${this.name}, ${this.age}</h2>
                <p class="dog-bio">${this.bio}</p>
            </div>
            
        `
    }
}

