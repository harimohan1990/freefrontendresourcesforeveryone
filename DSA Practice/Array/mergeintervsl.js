function merge(intervals) {
    if (intervals.length === 0) return [];
    
    // Sort intervals based on the start value
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [];
    let prevInterval = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        
        // If the current interval overlaps with the previous one, merge them
        if (currentInterval[0] <= prevInterval[1]) {
            prevInterval[1] = Math.max(prevInterval[1], currentInterval[1]);
        } else {
            // No overlap, add the previous interval to the result
            merged.push(prevInterval);
            prevInterval = currentInterval;
        }
    }
    
    // Don't forget to add the last interval
    merged.push(prevInterval);
    
    return merged;
}
