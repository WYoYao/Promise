
/**
 * Promise化的API
 * @param {*需要定时执行的方法} fn 
 * @param {*需要定时的时间ms} time 
 */
function timer(fn,time){
        return new Promise( (resolve,reject)=>{
            setTimeout(function(){
                fn();
                resolve();
            },time);
        });
}

// var promise_timer = timer(function () {
//    console.log('1')
// }, 1000) 

function loadNumber(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(+new Date());
        },num)
    })
}

/**
 *  通过Promise.all 来解决并发问题
 */
Promise
.all([loadNumber(1000),loadNumber(2000),loadNumber(3000),loadNumber(4000)])
.then((arr)=>{
    console.log(arr);
})