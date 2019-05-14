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



### Koa

### Tsoa



