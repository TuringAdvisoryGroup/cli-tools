import { useRef, useEffect } from 'react'
import { Animated, View } from 'react-native'
import { Icon } from '../icon'

export const LoadingAnimation = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    )
    rotateAnimation.start()

    return () => {
      rotateAnimation.stop()
    }
  }, [rotateAnim])

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Icon variant="refresh" />
      </Animated.View>
    </View>
  )
}
