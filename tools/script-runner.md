# Script Runner
## Bash
### 文件处理
- head => `cat -n /etc/passwd | head`, 显示头部文件，默认10行
- tail
- less/more => 分页显示文件内容
- file 显示文件类型
- wc 查看文件或统计信息
- find 查找文件或目录
    - `find . -name node_modules | xargs rm -rf` 在当前文件下递归查找node_modules，并将其删除
- ln 创建链接命令，分为软连接和硬连接
- tar 压缩／解压缩 [linux tar (打包.压缩.解压缩)命令说明 | tar如何解压文件到指定的目录？](https://www.cnblogs.com/52linux/archive/2012/03/04/2379738.html)
    - `tar -czvf xxx.tar.gz xxx` 压缩
    - `tar -xzvf xxx.tar.gz` 解压
### 文本处理
- sort 文本排序
- uniq 文本去重
- tr 替换命令
- diff 文件对比
- grep 查找字符串

### Advanced
- top 查看Linux任务管理器
- & 将作业后台进行
- jobs 查看作业
- fg 将后台进程放入前台
- fdisk 查看系统的磁盘信息
- dd 备份和拷贝文件
- paster 合并文本
- df 报告文件系统磁盘空间利用率
- du 评估文件空间利用率

### Others
- hostname 查看主机名
- w, who 列出系统登陆的用户
- uptime 查看系统运行时间
- uname 查看系统信息
- date 显示和设置系统日期和时间
- id 显示用户属性
- `#`
    - firstline of bash file `#!/bin/bash`.
    - comments `# this is a comment`.
- `~`
    - `~`: home directory.
    - `~+`: current directory.
    - `~-`: previous directory.
- `;` separator 表示连续指令
    - `cd ~/backup; mkdir startup; cp ~/.*startup`
- `;;` terminator 专用在case的选项
- `.` & `..`
- `'string'` 原样显示
```bash
#!/bin/bash
heyyou=home
echo '$heyyou' # $heyyou
```
- `"string"` 
```bash
#!/bin/bash
heyyou=home
echo "$heyyou" # home
```
- tools
    - sed 文本处理工具
    - awk

## [Gulp](https://gulpjs.com/)
- commands
    - `npm i -g gulp-cli`
    - `npm i gulp -D`
    - `touch gulpfile.js`
    - `gulp --help`


## Reference
- [beginner-guide-of-gulp](https://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp)
- [grunt](https://gruntjs.com/getting-started)