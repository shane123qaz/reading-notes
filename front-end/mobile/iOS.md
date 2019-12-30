

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



