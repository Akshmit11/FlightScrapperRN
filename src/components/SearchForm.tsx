import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function SearchForm() {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("")

    const onSearchPress = () => {
        console.log(`Searching for: `)
    }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Search the best prices for your next trip</Text>
      <TextInput placeholder='From' style={styles.input} value={from} onChangeText={setFrom} />
      <TextInput placeholder='To' style={styles.input} value={to} onChangeText={setTo} />
      <Button title='Search' onPress={onSearchPress} />
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        margin: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    title: {
        alignSelf: "center",
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    }
})