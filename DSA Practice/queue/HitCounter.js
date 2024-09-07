class HitCounter {
    constructor() {
        this.hits = [];
    }
    
    hit(timestamp) {
        this.hits.push(timestamp);
    }
    
    getHits(timestamp) {
        // Remove hits that are older than 5 minutes (300 seconds)
        while (this.hits.length > 0 && this.hits[0] <= timestamp - 300) {
            this.hits.shift();
        }
        return this.hits.length;
    }
}
