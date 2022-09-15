import React, {
  useState,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, Text, TouchableOpacity, TextInput, ViewStyle} from 'react-native';
import styles from './styles';

type IQuantityProps = {
  initialValue?: number;
  style?: ViewStyle | ViewStyle[];
  onQuantityChange?: (amount: number, prevValue: number) => void;
};

const Quantity: ForwardRefRenderFunction<any, IQuantityProps> = (
  {style, onQuantityChange, initialValue},
  ref: any,
) => {
  const [amount, setAmount] = useState<string>(String(initialValue || '1'));

  useImperativeHandle(ref, () => ({
    getQuantity: () => Number(amount) || 1,
    setValue: (value: number) => setAmount(value.toString()),
  }));

  const onChangeText = useCallback(
    (text: string) => {
      const value = Number(text) || 1;
      const newAmount = Math.max(Math.min(value, 100), 1);

      setAmount(prevState => {
        onQuantityChange?.(newAmount, Number(prevState || 0));
        return !text ? '' : newAmount.toString();
      });
    },
    [onQuantityChange],
  );

  const onBlur = useCallback(() => {
    if (!amount) {
      setAmount('1');
    }
  }, [amount]);

  const decrease = useCallback(() => {
    setAmount(prevState => {
      const prevValue = Number(prevState) || 1;
      const value = Math.max(prevValue - 1, 1);

      onQuantityChange?.(value, prevValue);
      return value.toString();
    });
  }, [onQuantityChange]);

  const increase = useCallback(() => {
    setAmount(prevState => {
      const prevValue = Number(prevState) || 1;
      const value = prevValue + 1;

      onQuantityChange?.(value, prevValue);
      return value.toString();
    });
  }, [onQuantityChange]);

  return (
    <View style={[styles.row, style]}>
      <TouchableOpacity style={styles.btn} onPress={decrease}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>

      <TextInput
        value={amount}
        onChangeText={onChangeText}
        style={styles.input}
        keyboardType={'number-pad'}
        placeholder={'1'}
        onBlur={onBlur}
      />

      <TouchableOpacity style={styles.btn} onPress={increase}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default forwardRef<any, IQuantityProps>(Quantity);
