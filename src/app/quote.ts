export class Quote {
    constructor(public id:number, public quoteText:string, public upvotes:number, public downvotes:number, 
        public author:string, public date:Date) {
    }
}
