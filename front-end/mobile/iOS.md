

# iOS

### [Apple Development Document](https://developer.apple.com/documentation/)

### [Swift](https://docs.swift.org/swift-book/index.html)

### [Swift UI](https://developer.apple.com/tutorials/swiftui/building-lists-and-navigation)

### [Native Module](https://facebook.github.io/react-native/docs/native-modules-ios)

####[Native Module Setup](https://facebook.github.io/react-native/docs/native-modules-setup)

 - `npm i -g create-react-native-module`
 - `create-react-native-module myLibrary`
 - add `react / react-native` into package.json and install
 - `Build Phases` - `link Binary with Libraries` - Select `React` from `node_modules`
    - [example](https://medium.com/wix-engineering/creating-a-native-module-in-react-native-93bab0123e46)

#### [Create Native Module](https://facebook.github.io/react-native/docs/native-modules-ios)

```objective-c
#import <React/RCTBridgeModule.h>

@interface CalendarManager : NSObject <RCTBridgeModule>
@end
```

```objective-c
#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
	//implement logic
}

@end
```

#### Using Native Module in React Native

```js
import {NativeModules} from 'react-native';
var CalendarManager = NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
```



### [IOS Deep linking](https://medium.com/wolox-driving-innovation/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97)

- Universal Links

### IOS Packaging

- What is packaging?
  - Converting the source code to .ipa(iPhone application archive) file.
- What is the process?
  - **选择发布方式**
    - App Store Connect -上架App Store以及TestFlight的app，用于生产环境发布 -  App Store & TestFlight
    - Ad Hoc - 部分机器可安装的app，用于非生产环境的测试 - App Center
    - Enterprise - 企业级应用发布 - App Center
    - Development - 与Ad Hoc类似，只有后续步骤所需要的证书和描述文件不同 - App Center
  - **选择证书和描述文件**
    - 证书分两种： 开发证书 和 发布证书
    - 描述文件： 一个App ID，设备(UUIDs)，证书的集合
    - How to generate certificates?
      - 借助keychain在本地生成一个CSR(Certificate Signing Request)文件
      - 通过开发者账号将CSR上传至Member Center
      - 从Member Center下载证书
  - **编译 & 签名**
  - **导出ipa文件**
- Using real device to install app - 需要证书，签名，描述文件。
  - AppID
  - device UUID
- Reference
  - [IOS打包发布那些事](https://mail.google.com/mail/u/0/#search/ios+/FMfcgxwGDNKtCLjzmsZPWqdjxMnrQWQZ)





