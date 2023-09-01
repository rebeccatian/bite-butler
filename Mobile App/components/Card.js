import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './Card.styles'
const Card = (image, name, score) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    {/* <Image
      style={styles.image}
      source={image}
      resizeMode="cover"
    /> */}
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${name}, ${score}`}
      </Text>
    </View>
  </View>
)

export default Card