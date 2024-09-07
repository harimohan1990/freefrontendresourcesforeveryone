function combinationSum(candidates, target) {
    const result = [];
    
    const backtrack = (remaining, combination, start) => {
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remaining) {
                combination.push(candidates[i]);
                backtrack(remaining - candidates[i], combination, i);
                combination.pop();
            }
        }
    };
    
    backtrack(target, [], 0);
    return result;
}
