function solution(info, n, m) {
    let answer = Infinity;
    const memo = new Set();

    function stealNext(rn,rm, index){
        if(index=== info.length){
            return answer = Math.min(rn, answer)
        }
         const key = `${index}-${rn}-${rm}`
        if(memo.has(key)) {
            return;
        }
        memo.add(key);
        
        const [costN,costM] = info[index]
        const newRn = rn +costN;
        const newRm = rm +costM;
        if( newRn < n && newRn <answer){
            stealNext(newRn, rm , index+1);
        }
        
        if(newRm < m){
            stealNext(rn,newRm,index+1);
        }
        
        
    }
    
    stealNext(0,0,0)
    return answer ===Infinity ? -1 : answer
}


