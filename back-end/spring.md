# Spring
- [starter][https://start.spring.io/]
- [guides](https://spring.io/guides)
    - [Spring Security SAML](http://projects.spring.io/spring-security-saml/#quick-start)
    - [LDAP服务器的概念和原理简单介绍](http://seanlook.com/2015/01/15/openldap_introduction/)
    - Spring Security 使用总结
        - https://juejin.im/post/59d5bbebf265da066c233d0e
        - https://www.ktanx.com/blog/p/4600
    - [JWT](https://jwt.io/)
    - [Spring jpa](https://docs.spring.io/spring-data/jpa/docs/2.1.3.RELEASE/reference/html/)
        - https://spring.io/blog/2011/02/10/getting-started-with-spring-data-jpa/
    - [How To Read A SAML 2.0 Response With OpenSAML](http://sureshatt.blogspot.com/2012/11/how-to-read-saml-20-response-with.html)

## Spring Configuration with Java
- @Configuration - at class level
- @Bean - at method level

//开发环境

java -jar app.jar --spring.profiles.active=dev--server.port=8060

//测试环境

java -jar app.jar --spring.profiles.active=qa --server.port=8060

//生产环境

java -jar app.jar --spring.profiles.active=prod --server.port=8060


## mybatis
- [mybatis-3 doc](http://www.mybatis.org/mybatis-3/zh/index.html)

## Tools
- [Lombok](https://projectlombok.org/features/all)
- Gson - Java处理Json
    - `com.google.code.gson:gson`
    - [用GSON 五招之内搞定任何JSON数组](https://www.cnblogs.com/jianyungsun/p/6647203.html)

## Database

### Mysql
- Shane0123@
- How to reset password
    - remove database
    ```bash
    $ brew services stop mysql
    $ pkill mysqld
    $ rm -rf /usr/local/var/mysql/ # NOTE: this will delete your existing database!!!
    $ brew postinstall mysql
    $ brew services restart mysql
    $ mysql -uroot
    ```
    - reinstall
    ```bash
    $ brew uninstall mysql
    $ brew info mysql
    $ brew install mysql
    ```
    - enter mysql
    ```bash
    $ mysql -u root -p
    $ show databases;
    $ create database [database_name];
    $ use [database_name];
    ```