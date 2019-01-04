# Basic

## Redirect vs Forward
- Redirect：间接请求转发，也叫重定向（A找B借钱，B说没有，让A去找C借）
    - ![redirect](https://images0.cnblogs.com/blog2015/712052/201505/202214341663208.png)
    ```java
    //Servlet中处理get请求的方法
    public void doGet(HttpServletRequest request,HttpServletResponse response){
        //请求重定向到另外的资源
        response.sendRedirect("资源的URL");
    }
    ```
- Forward：直接请求转发（A找B借钱，B说没有，B去找C借，借到借不到都会把消息传递给A）
    - ![forward](https://images0.cnblogs.com/blog2015/712052/201505/202240531979609.png) 
    ```java
    //Servlet里处理get请求的方法
    public void doGet(HttpServletRequest request , HttpServletResponse response){
        //获取请求转发器对象，该转发器的指向通过getRequestDisPatcher()的参数设置
        RequestDispatcher requestDispatcher =request.getRequestDispatcher("资源的URL");
        //调用forward()方法，转发请求      
        requestDispatcher.forward(request,response);    
    }
    ```
### Reference
- [forward vs redirect](https://www.cnblogs.com/selene/p/4518246.html)
- [restful api](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)