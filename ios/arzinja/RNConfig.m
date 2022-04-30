//
//  RNConfig.m
//  arzinja
//
//  Created by Farhad on 2022-04-29.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport
{
#if Stage
  NSString *env = @"Stage";
#elif Beta
  NSString *env = @"Beta";
#elif PreProd
  NSString *env = @"PreProd";
#elif Prod
  NSString *env = @"Prod";
#endif
  
 return @{ @"env": env };
}

- (BOOL)requiresMainQueueSetup
{
    return YES;
}
@end
