## Skills

- [Koa](https://koajs.com/)
  - koa-router
  - body-parser
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



