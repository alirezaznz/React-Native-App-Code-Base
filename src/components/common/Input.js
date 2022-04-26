import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
// import {observer} from 'mobx-react';
// import validate from 'validate.js';

import {STYLES} from '@Constants';
import {MText, Touchable} from '@Components';

// import {useStore} from '../../hooks';
import {putCommas, toEnglishDigits} from '@Utils';

const Input = ({
  oneLine = false,
  fontSize = null,
  style,
  height = 45,
  align = 'right',
  textArea = false,
  seprator = false,
  onChange = () => false,
  placeholder,
  prefix,
  customRegex = null,
  formName,
  name,
  keyboardType,
  ltr = false,
  clearButton = false,
  onRegexCheck = () => {},
  englishChar,
  hardValue = null,
  onKeyUpFunction = null,
  editable = true,
  decimal,
  inputStyle,
  multiline = true,
  ...props
}) => {
  // const {formStore} = useStore();
  // const form = formStore.has(formName) && formStore?.form?.(formName);
  // const formValue = form && form?.$?.(name)?.value;
  // const formInputErrors = form && form?.$?.(name)?.errors;
  const data = useRef({
    value: '',
    multiline: multiline,
  });
  const [state, setState] = useState(data.current);
  const [isTyping, setIsTyping] = useState({
    name: '',
    typing: false,
    typingTimeout: 0,
  });

  const resetState = () => {
    data.current = {...data.current, value: ''};
    setState(data.current);
    onChange('');
    onKeyUpFunction?.('');
  };

  // useEffect(() => {
  //   console.log({hardValue, checkIsNumber});

  //   if (hardValue === 'clear') {
  //     data.current = {...data.current, value: ''};
  //     setState(data.current);
  //     return;
  //   }
  //   const checkIsNumber = Number(hardValue);

  //   if (hardValue && typeof checkIsNumber === 'number') {
  //     let value = hardValue?.toString?.();
  //     value = utils?.toEnglishDigits?.(value);
  //     value = seprator ? value?.split?.(',').join('') : value;
  //     // if (keyboardType === 'numeric' && !validate.isNumber(value * 1)) {
  //     //   return;
  //     // }
  //     let val = {value};
  //     data.current = {...data.current, ...val};
  //     setState(data.current);
  //     formName && formStore.form?.(formName)?.$?.(name)?.set?.(value);
  //   } else if (hardValue === 0) {
  //     const value = '';
  //     let val = {value};
  //     data.current = {...data.current, ...val};
  //     setState(data.current);
  //     formName && formStore.form?.(formName)?.$?.(name)?.set?.(value);
  //   } else if (typeof hardValue === 'string') {
  //     data.current = {...data.current, value: hardValue};
  //     // console.log('SET_HARDVALUE', data.current);
  //     setState(data.current);
  //     formName && formStore.form?.(formName)?.$?.(name)?.set?.(hardValue);
  //   }
  // }, [hardValue]);

  // useEffect(() => {
  //   if (!hardValue) {
  //     formValue !== null && formName && change({value: String(formValue)});
  //   }
  // }, [formValue]);

  const change = (val = {}, startKeyupFunction = true) => {
    data.current = {...data.current, ...val};
    setState(data.current);

    if (onKeyUpFunction && startKeyupFunction) {
      if (isTyping.typingTimeout) {
        clearTimeout(isTyping.typingTimeout);
      }
      setIsTyping({
        name: data.current.value,
        typing: false,
        typingTimeout: setTimeout(() => {
          onKeyUpFunction(data.current.value);
        }, 500),
      });
    }
  };

  const _handleFocus = () => {
    change(
      {
        multiline: textArea,
      },
      false,
    );
  };

  const _handleBlur = () => {
    change(
      {
        multiline: multiline,
      },
      false,
    );
  };

  const _onChangeText = value => {
    if (editable) {
      value = toEnglishDigits(value);
      value = seprator ? value.split(',').join('') : value;
      // if (keyboardType === 'numeric' && !validate.isNumber(value * 1)) {
      //   // return;,,,,,,
      // }
      change({value});
      // formName && formStore.form?.(formName)?.$(name)?.set?.(value);
      onChange(value);
    }
  };
  const manageValue = () => {
    // if (decimal) {
    //   const intValue = Number(state.value);
    //   if (intValue > 0) {
    //     return intValue.toFixed(decimal - (state.value.length - 4)).toString();
    //   } else {
    //     state.value;
    //   }
    // }
    if (seprator) {
      return putCommas(state.value);
    } else {
      return state.value;
    }
  };
  const checkRegex = () => {
    if (!state.value || !customRegex) {
      onRegexCheck(null);
      return false;
    }
    let pattern = new RegExp(customRegex);
    onRegexCheck(!pattern.test(state.value));
    return !pattern.test(state.value);
  };

  return (
    <View
      style={[
        s.container,
        customRegex &&
          state.value && {
            backgroundColor: !checkRegex()
              ? STYLES.Color.lightPrimary
              : STYLES.Color.smoothyPinky,
          },
        {
          height,
        },
        style,
        {
          borderColor:
            // (formInputErrors.length && state.value.length) ||
            checkRegex()
              ? STYLES.Color.smoothyPinky
              : customRegex
              ? state.value
                ? STYLES.Color.lightPrimary
                : 'transparent'
              : 'transparent',
        },
      ]}>
      <View
        style={[
          s.inputWrapper,
          {
            alignItems: {
              right: 'flex-end',
              left: 'flex-start',
              center: 'center',
            }[align],
          },
        ]}>
        <TextInput
          style={[
            s.input,
            textArea && s.textArea,
            {
              paddingVertical: oneLine ? 8 : null,
              textAlign: align,
              textAlignVertical: textArea ? 'top' : 'center',
            },
            englishChar && s.englishChar,
            keyboardType === 'numeric' && s.ltr,
            ltr && s.ltr,
            prefix && s.paddingLeft,
            // error && {color: '#9e040c'},
            customRegex && {
              color: !checkRegex() ? STYLES.Color.primary : STYLES.Color,
            },
            inputStyle,
          ]}
          multiline={Platform.select({
            ios: textArea,
            android: state.multiline,
          })}
          numberOfLines={1}
          onChangeText={_onChangeText}
          onFocus={_handleFocus}
          value={manageValue()}
          onBlur={_handleBlur}
          underlineColorAndroid={'rgba(0,0,0,0)'}
          autoCorrect={false}
          keyboardType={keyboardType}
          selectionColor={STYLES.Color.primary}
          editable={editable}
          {...props}
        />
        {state.value ? null : (
          <View style={[s.label, textArea && s.labelTop]}>
            <MText type="span" style={{fontSize: fontSize}}>
              {placeholder}
            </MText>
          </View>
        )}
        {!prefix && !clearButton ? null : (
          <View style={clearButton ? s.button : s.prefix}>
            {clearButton && state.value ? (
              <Touchable type="opacity" onPress={resetState}>
                <MText type={'heading3'} style={{color: '#707070'}}>
                  x
                </MText>
              </Touchable>
            ) : null}
            {prefix && (
              <MText type="span" dark>
                {prefix}
              </MText>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: STYLES.Color.inputBg,
    borderRadius: 5,
    // borderWidth: 1,
    flexDirection: 'row-reverse',
    height: 40,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: STYLES.Color.inputBg,
  },
  input: {
    //fontFamily: STYLES.Fonts.input,
    fontSize: 14,
    width: '100%',
    padding: 0,
    textAlign: 'right',
    position: 'relative',
    zIndex: 10,
    paddingHorizontal: 10,
    height: '100%',
  },
  ltr: {
    textAlign: 'left',
  },
  paddingLeft: {
    paddingLeft: 50,
  },
  textArea: {
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  label: {
    position: 'absolute',
    zIndex: -1,
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  labelTop: {
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  prefix: {
    position: 'absolute',
    zIndex: -1,
    left: 10,
  },
  button: {
    zIndex: 2000,
    position: 'absolute',
    left: 5,
    padding: 10,
  },
  englishChar: {
    fontFamily: 'Arial',
  },
});

export {Input};
