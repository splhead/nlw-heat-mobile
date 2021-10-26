import React from 'react'

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
  ActivityIndicator
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles'

type ButtonProps = {
  title: string
  color: ColorValue
  backgroundColor: ColorValue
  icon?: React.ComponentProps<typeof AntDesign>['name']
  isLoading?: boolean
} & TouchableOpacityProps

export function Button({ 
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...props 
  }: ButtonProps){
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 
        <ActivityIndicator color={color} />
        :
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>
            {title}
          </Text>
        </>
      }
    </TouchableOpacity>
  )
}