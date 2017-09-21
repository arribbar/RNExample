#import <Foundation/Foundation.h>
#import "ReactNativeShareExtension.h"
#import "React/RCTBundleURLProvider.h"
#import "React/RCTRootView.h"

@interface ShareEx : ReactNativeShareExtension
@end

@implementation ShareEx

RCT_EXPORT_MODULE();

- (UIView*) shareView {
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ShareEx"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = nil;
  return rootView;
}

@end
