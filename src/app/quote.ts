export class Quote {
    constructor(public id:number, public quote:string, public upvotes:number, public downvotes:number, 
        public author:string, public date:Date) {
    }
}
