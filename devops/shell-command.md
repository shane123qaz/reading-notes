#Shell Command
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

