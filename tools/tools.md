# Tools
## Resources
- Mermaid
    - [Draw Diagrams With Markdown](https://support.typora.io/Draw-Diagrams-With-Markdown/)
    - [Inline in md file](https://mermaidjs.github.io/)
- [Chrome Vimium](./chrome-vimium.md)
- [cron-job](https://cron-job.org/en/) : free cron job on the cloud
- [direnv](https://direnv.net/)

### VS Code

- editorconfig -  https://medium.com/fantageek/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6

## Command

- `sudo lsof -i:<port>`: 查看端口
- `sudo pkill -u postgres` : kill completely
- `brew services list:`
- `brew services stop xxx`:
- clean watchman
  - `watchman watch-del-all`
  - `watchman shutdown-server`
- ip
  - external ip: `curl ifconfig.me`
  - internal ip:  `ipconfig getifaddr en0`
- show all the enveronment variables
  - `printenv`
  - `env`
  - `echo $VARABLE_NAME`
- control env load/unload
  - `direnv xxx`
- [lighthouse](https://developers.google.com/web/tools/lighthouse#devtools)
  - `npm install -g lighthouse`
  - `lighthouse <url>`
    - `lighthouse --output json --output-path <path/for/output.json>` : generate json report
  - [PageSpeed Insights](https://developers.google.com/web/tools/lighthouse#devtools)
- get devices UDID:
  - `instruments -s devices`
  - install debug mode app on my local
    - `fastlane run register_device udid: xxxx` : register the iPhone
    - `fastlane match adhoc --force` :update the prevision profile

### Swagger

- `docker pull swaggerapi/swagger-editor`
- `docker run -d -p 80:8080 swaggerapi/swagger-editor`

### WebRTC

- https://kfwong.github.io/peerjs-chatroom/

- https://github.com/kfwong/peerjs-server-heroku
- https://webrtc.github.io/samples/

aws xray