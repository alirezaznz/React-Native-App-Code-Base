import {LayoutAnimation, Platform, Dimensions} from 'react-native';

export function layoutAnimation() {
  const CustomLayoutSpring = {
    duration: Platform.select({ios: 600, android: 800}),
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: Platform.select({ios: 0.7, android: 0.9}),
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: Platform.select({ios: 0.7, android: 0.9}),
    },
  };
  LayoutAnimation.configureNext(CustomLayoutSpring);
}

export const toEnglishDigits = str => {
  // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
  var e = '۰'.charCodeAt(0);
  str = str.replace(/[۰-۹]/g, t => {
    return t.charCodeAt(0) - e;
  });
  // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
  e = '٠'.charCodeAt(0);
  str = str.replace(/[٠-٩]/g, t => {
    return t.charCodeAt(0) - e;
  });
  return str;
};

export const putCommas = number => {
  if (!number) {
    return number;
  }
  if (typeof number === 'undefined') {
    return number;
  }
  if (typeof number === 'number') {
    number = number.toString();
  }
  if (number.includes('.')) {
    const numbers = number.split('.');
    return numbers[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + numbers[1];
  }
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
