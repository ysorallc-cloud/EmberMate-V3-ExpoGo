import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { Palette } from '@/constants/theme';

export function BreathingOrb() {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.06,
          duration: 3200,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 3200,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [pulse]);

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ scale: pulse }] }]}>
      <View style={[styles.ring, styles.outerRing]} />
      <View style={[styles.ring, styles.midRing]} />
      <View style={[styles.ring, styles.innerRing]} />
      <LinearGradient colors={[Palette.sandLight, Palette.sand]} style={styles.core} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'rgba(240, 203, 176, 0.75)',
  },
  outerRing: {
    width: 240,
    height: 240,
    shadowColor: Palette.sandLight,
    shadowOpacity: 0.45,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 8 },
  },
  midRing: {
    width: 200,
    height: 200,
    borderColor: 'rgba(240, 203, 176, 0.55)',
  },
  innerRing: {
    width: 160,
    height: 160,
    borderColor: 'rgba(240, 203, 176, 0.4)',
  },
  core: {
    width: 120,
    height: 120,
    borderRadius: 999,
    shadowColor: Palette.sandLight,
    shadowOpacity: 0.65,
    shadowRadius: 50,
    shadowOffset: { width: 0, height: 8 },
  },
});
