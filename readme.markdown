
# Promise

> 回调函数本身并没有问题，它的问题出现在多个回调函数嵌套。假定读取A文件之后，再读取B文件，代码如下。

```
fs.readFile(fileA, function (err, data) {
  fs.readFile(fileB, function (err, data) {
    // ...
  });
});
```

>不难想象，如果依次读取多个文件，就会出现多重嵌套。代码不是纵向发展，而是横向发展，很快就会乱成一团，无法管理。这种情况就称为"回调函数噩梦"（callback hell）。
Promise就是为了解决这个问题而提出的。它不是新的语法功能，而是一种新的写法，允许将回调函数的横向加载，改成纵向加载。采用Promise，连续读取多个文件，写法如下。


```
var readFile = require('fs-readfile-promise');

readFile(fileA)
.then(function(data){
  console.log(data.toString());
})
.then(function(){
  return readFile(fileB);
})
.then(function(data){
  console.log(data.toString());
})
.catch(function(err) {
  console.log(err);
});
```

[阅读地址的链接](https://aotu.io/notes/2016/01/08/promise/)

**因为每次调用 then 都会返回一个新的 Promise ，如果 then 中的申明的方法没有返回一个 Promise ，那么会默认返回一个新的
处于 fulfilled 的 Promise ，之后添加的 then 中的方法都会立即执行**

**当要在使用链式 Promise 时，请务必在then传入的方法中返回一个新的 Promise。**

**只要在 Promise 执行过程中抛出异常，都会直接跳转到 catch 中。**