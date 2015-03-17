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

2015-3-9

## Uncaught TypeError: Cannot set property 'innerHTML' of null

    未捕获的类型错误：不能设置为null财产“的innerHTML ”

```
false 

        <div id="mult-num"></div>
        <script type="text/javascript">
            function mult(a,b){
                return a * b
            }
            document.getElementById('mult-num').innerHTML=(4,3);
        </script>

true     
        
        <div id="mult-num"></div>
        <script type="text/javascript">
            function mult(a,b){
                return a * b
            }
            document.getElementById('mult-num').innerHTML=mult(4,3);
        </script>

```

2015-3-10
## Uncaught SyntaxError: Unexpected end of input
   
        未捕获的syntaxerror:输入意外结束

2015-3-11

## Uncaught ReferenceError: Invalid left-hand side in assignment 

        未捕获的ReferenceError ：无效的左手侧赋值

false 

        
        value=''|| value=num

true
        value==''|| value==num


2015-3-13
## Uncaught TypeError: Cannot read property 'appendChild' of null

        未捕获的类型错误：无法读取空财产“的appendChild ”

false 
        
        <div class="div1">        //错误标记
            <p>这是一个段落。</p>
            <p>这是另一个段落。</p>     
        </div>
        <script type="text/javascript">
            var para = document.createElement("p"); //.createElement()是在对象中创建一个对象
            var node = document.createTextNode('需要插入的文字内容'); //.createTextNode()创建新文本节点,这个方法接受一个参数——要插入节点中的文本。
            para.appendChild(node);
            
            var x = document.getElementById('div1');
            x.appendChild(para);
        </script>

true
        
        <div id="div1">
            <p>这是一个段落。</p>
            <p>这是另一个段落。</p>     
        </div>
        <script type="text/javascript">
            var para = document.createElement("p"); //.createElement()是在对象中创建一个对象
            var node = document.createTextNode('需要插入的文字内容'); //.createTextNode()创建新文本节点,这个方法接受一个参数——要插入节点中的文本。
            para.appendChild(node);
            
            var x = document.getElementById('div1');
            x.appendChild(para);
        </script>

2015-3-15
##  Uncaught TypeError: Property 'innerWidth' of object [object global] is not a function 
        
        未捕获的列表的属性对象[对象] innerwidth全球不是一个函数

false 

             var w = window.innerWidth()  || document.documentElement.clientWidth || document.body.clienWidth;

            document.getElementById("demo").innerHTML = '浏览器窗口宽度大小' + w

true 
        
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clienWidth;

            document.getElementById("demo").innerHTML = '浏览器窗口宽度大小' + w 

## Uncaught TypeError: Property 'value' of object #<HTMLInputElement> is not a function 

     未捕获的列表属性的值对象#＜htmlinputelement >不是一个函数

false

        <script type="text/javascript">
            function timedMsg(t1,t2,t3,t4){
                t1 = setTimeout("document.getElementById('txt').value('2秒')",2000);
                t2 = setTimeout("document.getElementById('txt').value('4秒')",4000);
                t3 = setTimeout("document.getElementById('txt').value('6秒')",6000);
                t4 = setTimeout("document.getElementById('txt').value('8秒')",8000);
            }
        </script>

true 

        <script type="text/javascript">
            function timedMsg(t1,t2,t3,t4){
                t1 = setTimeout("document.getElementById('txt').value='2秒'",2000);
                t2 = setTimeout("document.getElementById('txt').value='4秒'",4000);
                t3 = setTimeout("document.getElementById('txt').value='6秒'",6000);
                t4 = setTimeout("document.getElementById('txt').value='8秒'",8000);
            }
        </script>

2015-3-17
         $('#personalc').on('show.bs.modal', function (e) {
            // modal 弹出事件方法调用
                $.get('/admin/account/one?_id={{ handler.uid}}',function(data){ // 通过/admin/account/one?_id={{ handler.uid}}这个接口获取用户信息data；
                    data = data.data;
                    $('#profile-form').find("input[name='email']").val(data.email); 
                    // jquery 通过input元素属性查找input; 
                    // 通过val方法给input赋值；
                    // 访问对象属性 data.email

                    $('#profile-form').find("input[name='nickname']").val(data.nickname); //
                    $('#profile-form').find("input[name='mobile']").val(data.mobile);
                })
           }) 
           
           $('#modify').click(function(){
               var data = data.data;
              $('#profile-form').find("input[name='email']").attr("value", '/admin/account/one?_id='+ data.email)
              console.log(data);
              // $('#profile-form').find("input[name='nickname']").attr("value", '/admin/account/one?_id='+ data.nickname)
              // $('#profile-form').find("input[name='mobile']").attr("value", '/admin/account/one?_id='+ data.mobile)
              // $.post('/admin/account/one?_id'+_id, function(data){
              //    data = data.data; 
              //    if(data.status){
              //       location.reload();
              //     }
              //   });  
           }) 
        })