import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Messages = () => {
  return (
    <View>
    <Link href="/home/messages/123">Message with lucas</Link>
      <Text>Messages</Text>
    </View>
  )
}

export default Messages