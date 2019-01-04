# Spring
- [starter][https://start.spring.io/]
- [guides](https://spring.io/guides)

## Spring Configuration with Java
- @Configuration - at class level
- @Bean - at method level

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