

/**
 * Promise 的链式调用
 */

let getName = function () {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve({ "name": "leo" });
        },1000)
    })
}

let addSex=function(info){

    return new Promise(resolve=>{

        setTimeout(()=>{

            info.Sex="YX";
            resolve(info);
        },1000)
    })
}

let addAge=function(info){

    return new Promise(resolve=>{

        setTimeout(()=>{

            info.Age="24";
            resolve(info);
        },1000)
    })
}

getName().then(addSex).then(addAge).then(info=>{
    console.log(info);
})