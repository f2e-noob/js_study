2015-3-5
## Unexpected identifier 异常
```
 false  var options = {
            points: {'show':true},
            lines:{'show':true},
            xaxis: {
                mode: "time"
            }
            grid: {
              hoverable: true,
              clickable: true
            },
        };


 ture       var options = {
            points: {'show':true},
            lines:{'show':true},
            xaxis: {
                mode: "time"
            },
            grid: {
              hoverable: true,
              clickable: true
            },
        };
 ```
 ## Unexpected identifier 异常
```
       
 ```
语法异常！

2015-3-6
## Uncaught ReferenceError: util is not defined

```
		使用未定义的语法！defined
```

##  Uncaught SyntaxError: Unexpected token 
```
        意外的标记！！
```

## Uncaught TypeError: string is not a function
```
        未捕获的列表的字符串不是一个函数
false   var x=document.getElementById("demo").value();

ture   var x=document.getElementById("demo").value;
        
```


2015-3-8
## Uncaught TypeError: Cannot set property 'innerHTML' of null
        
        无法设置属性列表的空的innerHTML”
```
 false       
            
            <script type="text/javascript">
                document.getElementById("txt1").innerHTML="Hello Word"
                document.getElementById('txt2').innerHTML="Hello Word";
            </script>
            JavaScript 代码（或者只有 JavaScript）是 JavaScript 语句的序列。
    浏览器会按照编写顺序来执行每条语句。<br/>
            <p id="txt1"> </p>
            <p id="txt2"> </p>

true        
          
            JavaScript 代码（或者只有 JavaScript）是 JavaScript 语句的序列。
    浏览器会按照编写顺序来执行每条语句。<br/>
            <p id="txt1"> </p>
            <p id="txt2"> </p>  
             <script type="text/javascript">
                document.getElementById("txt1").innerHTML="Hello Word"
                document.getElementById('txt2').innerHTML="Hello Word";
            </script>   
```