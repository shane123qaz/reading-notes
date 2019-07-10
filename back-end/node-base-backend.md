## Skills

- Node

  - pm2: node.js进程管理器

    ```shell
    npm i pm2@latest -g
    pm2 start app.js
    ```

    ```js
    {
      "app": [{
        "script": "./app.js",
        "instance": -1,
        "exec_mode": "cluster",
        "watch": true,	   		//hot reload
        "env": {
          "NODE_ENV": "prod"
        }
      }]
    }
    ```

  - pidusage: 获取进程的CPU使用情况

    ```shell
    npm i pidusage --save
    ```

    

  - querystring

  - path

  - http

  - sequelize  - ORM[Object Relational Mapping]类库

  - mongoose - 

  - redis

    ```shell
    npm i sequelize --save
    ```

  - log4js：基于node.js的第三方日志模块

    ```shell
    npm i log4js --save
    ```

    - `trace / debug / info / warn / error / fatal`

    ```js
    const log4js = require('log4js');
    const logger = log4js.getLogger();
    
    logger.level = 'debug';
    logger.debug("some debug messages");
    ```

    - `log4js.configure(config)`：日志切割

- [Koa](https://koajs.com/)

  - koa-router

    ```js
    const Koa = require('koa');
    const Router = require('koa-router');
    const app = new Koa();
    const router = new Router();
    
    router.get('/', async (ctx, next) => {
      await next();
      ctx.response.type = 'text/html';
      ctx.response.body = '<h1>Hello World</h1>'
    });
    
    app.use(router.routes());
    ```

  - koa-compose

    ```js
    const koa = require('koa');
    const compose = require('koa-compose');
    const app = new koa();
    
    async function middlewareA (ctx, next) {await next();}
    async function middlewareB (ctx, next) {await next();}
    
    const all = compose([middlewareA, middlewareB]);
    app.use(all);
    ```

  - koa-bodyparser

  - koa-multer 实现文件上传

  - koa-session

    ```js
    const Koa = require('koa');
    const session = require('koa-session');
    
    const CONFIG = {
      key: 'myAppSessKey',
      maxAge: 86400000,
      overwrite: true,
      httpOnly: true,
      signed: true
    }
    const app = new Koa();
    app.keys = ['some secret'];
    app.use(session(CONFIG, app))
    ```

  - test

    - Mocha

    - Chai

    - SuperTest: 测试Restful API

      ```shell
      npm i supertest --save
      ```

      - Nock: 模拟服务器响应，会覆盖Node.js的http.request方法，来伪造一个结果

        ```js
        nock('http://test.com')
          .get('/test1')
          .delay(200)
          .reply(200, {foo: 'bar'});
        ```

    - Nyc：测试覆盖率

      ```shell
      npm i nyc -D
      
      #进行代码测试覆盖率检查
      nyc mocha test/index.js
      #输出更详细的报告
      nyc -report=lcov -report=text-lcov mocha test/index.js
      #测试覆盖率是否达标
      nyc -check-coverage -lines 95 mocha test/index.js
      ```

      

- [TypeScript](https://www.typescriptlang.org/)

  - [typescirpt-node-starter](<https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter>)

- ~~docker~~

- Elastic search

- [tsoa](https://github.com/lukeautry/tsoa), typeorm

- aws

- terraform

### TypeScript

#### build with gulp

- dependencies

  ```shell
  npm install -g gulp-cli
  npm install --save-dev typescript gulp@4.0.0 gulp-typescript
  ```

- tsconfig — tsconfig.json

  ```json
  {
      "files": [
          "src/main.ts",
      ],
      "compilerOptions": {
          "noImplicitAny": true,
          "target": "es5"
      }
  }
  ```

  or

  ```json
  {
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "noImplicitAny": true,
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist",
      "baseUrl": ".",
      "paths": {
        "*": [
          "node_modules/*",
          "src/types/*"
        ]
      }
    }
  }
  ```

  

- compile typescript to javascript — gulp.js

  ```js
  const gulp = require('gulp');
  const gTs = require('gulp-typescript');
  
  const tsProject = gTs.createProject("tsconfig.json");
  
  gulp.task("default", function() {
    return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest("dist"));
  })
  ```

  or

  ```shell
  npm i -D typescript
  tsc
  ```



=================================================================================

Typescript

NodeJs

**Koa** vs Express vs Hapi

- Express — callback, hard to maintain
- Koa — no callback any more

Elaticsearch vs **PostgreSQL**

- postgres

  - [**TypeORM**](https://github.com/typeorm/typeorm)

    - https://typeorm.io/#/

  - AWS 

    - Amazon Aurora
    - [Amazon Relational Database Service (RDS)](https://aws.amazon.com/rds/)

  - JSON / JSONB 全文检索

    - Tsvector

    - Tsquery

      

Tsoa vs **routing-controllers**

- Tsoa —  generate swagger
- routing-controllers  — Powerful! but not swagger
  - https://github.com/typestack/typedi
  - function
    - `@UserBefore() @UserAfter`
    - `@JsonController`
    - `Errors` - `HttpError...` 
    - `createKoaServer / useKoaServer`: `routePrefix / interceptors / classTransformer`
    - `validate`: https://github.com/typestack/class-validator

Apollo

- [apollo server](https://www.apollographql.com/docs/apollo-server/features/caching/)

  - ![GraphQL](/Users/xinzhang/Documents/code/doc/reading-notes/back-end/5c443c333b188.png)

  - Rest vs GraphQL

    ```
    GET /api/v1/articles/
    GET /api/v1/article/:id/
    POST /api/v1/article/
    DELETE /api/v1/article/:id/
    PATCH /api/v1/article/:id/
    
    query {
      articles(): [Article!]!
      article(id: Int): Article!
    }
    mutation {
      createArticle(): Article!
      updateArticle(id: Int): Article!
      deleteArticle(id: Int): Article!
    }
    ```

  - 

### Reference

- [How to build api typescript koa and typeorm](https://inviqa.com/blog/how-build-basic-api-typescript-koa-and-typeorm)

- https://blog.panoply.io/postgresql-vs.-mysql

- https://www.fundebug.com/ — 专注于JavaScript、微信小程序、微信小游戏、支付宝小程序、React Native、Node.js和Java线上应用实时BUG监控.

- [typeorm](https://github.com/typeorm/typeorm)
- [nodemon](https://github.com/remy/nodemon)
- [routing-controllers](https://github.com/typestack/routing-controllers#example-of-usage)
- [postgreSQL](https://www.postgresql.org/docs/11/index.html)
  - [Setting up a RESTful API with Node.js and PostgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)
  - [近 20 年的厚积薄发，PostgreSQL 10 新特性详解](https://www.oschina.net/news/89136/yunqi-postgresql-session)
  - [PostgreSQL何以支持丰富的NoSQL特性](https://dbaplus.cn/news-19-2238-1.html)

- GraphQL

  - [Prisma](https://www.prisma.io/)
  - [RPC vs REST vs GraphQL](https://www.youtube.com/watch?v=IvsANO0qZEg)

  - [GraphQL directives](https://blog.callstack.io/the-power-of-graphql-directives-81f4987fd76d)















