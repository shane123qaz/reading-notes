# Nginx
- Nginx is a powerful web server and uses a non-threaded, event-driven architecture(that enables it to outperform Apache if configuired correctly).
- load balancing
- HTTP caching
- used as a reverse proxy

## Configuration
- worker_processes
- worker_connections
- access_log & error_log
- gzip

## Commands
- `nginx`
- `nginx -s stop`, send signal to a master process, such as stop, quit, reopen, reload.
- `brew info nginx`, 查看配置文件路径等信息

## Configuration
- web server
  ```js
  server {
      listen 80;
      server_name test.co
      root /var/www/test.co
  }
  ```

  ```output
  netguru.co:80/index.html     # returns /var/www/netguru.co/index.html
  netguru.co:80/foo/index.html # returns /var/www/netguru.co/foo/index.html
  ```
- load balancer
    - location [modifier] path
        - `=`, Exact match
        - `^~`, Preferential match
        - `~ && ~*`, Regex match
        - no modifier, Prefix match
  ```js
  http {
    upstream myapp1 {
        /*
        least_conn; //最少连接负载均衡
        ip_hash;    //会话持久化
        server srv4.example.com weight=3;  //带权重的负载均衡
        */
        server srv1.example.com;
        server srv2.example.com;
        server srv3.example.com;
        server srv4.example.com weight=3; 
    }

    server {
        listen 80;

        location / {
            proxy_pass http://myapp1;
        }
    }
  }
  ```

## Apache v. Nginx
- the advantage of Apache
    - rewrite
    - 动态页面，nginx只适合静态和反向代理
    - 模块多
    - bug少
- the advantage of Nginx
    - 轻量级，比Apache占用更少的内存和资源，nginx选用epoll和kqueue作为开发模型
    - 并发性，nginx请求是异步非阻塞的，apache是阻塞的
    - 高度模块化设计
    - 社区活跃
    - Nginx本身是反向代理服务器
    - 负载均衡能力突出
- apache用的select模型
    - socket数量限制，由FD_SETSIZE决定，内核默认32*32=1024
    - 操作限制:通过遍历FD_SETSIZE个Socket来完成调度,不管哪个Socket是活跃的,都遍历一遍（这就是apache慢的原因）
- nginx用的epoll模型
    - Socket数量无限制。
    - 操作无限制:基于内核提供的反射模式,有活跃Socket时,内核访问该Socket的callback,不需要遍历轮询（这当然是nginx快的原因啦）

## Reference
- [nginx-tutorial](https://www.netguru.co/codestories/nginx-tutorial-basics-concepts)
- [nginx-as-a-reverse-proxy](https://www.liuchungui.com/blog/2015/10/21/mhuan-jing-xia-nginxshi-xian-fan-xiang-dai-li/)
- [nginx-load-balancer](https://skyao.gitbooks.io/learning-nginx/content/documentation/HTTP_load_balancer.html)
- [前后端分离：利用nginx的rewrite解决跨域问题]
    - https://my.oschina.net/keeperv/blog/732555
    - https://cloud.tencent.com/developer/article/1075355