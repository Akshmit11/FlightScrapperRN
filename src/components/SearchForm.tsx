import {
    Button,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Feather } from "@expo/vector-icons";

export default function SearchForm() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departDate, setDepartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    const onSearchPress = () => {
        console.log(`Searching for: `);
    };

    const setDatePickerDepart = () => { 
        DateTimePickerAndroid.open({
            value: departDate,
            onChange(event, date) {
                setDepartDate(date || new Date());
            },
            mode: 'date',
            is24Hour: true,
            minimumDate: new Date()
        })
    };

    const setDatePickerReturn = () => { 
        DateTimePickerAndroid.open({
            value: returnDate,
            onChange(event, date) {
                setReturnDate(date || new Date());
            },
            mode: 'date',
            is24Hour: true,
            minimumDate: departDate
        })
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                Search the best prices for your next trip
            </Text>
            <TextInput
                placeholder="From"
                style={styles.input}
                value={from}
                onChangeText={setFrom}
            />
            <TextInput
                placeholder="To"
                style={styles.input}
                value={to}
                onChangeText={setTo}
            />
            <View style={styles.dateContainer}>
                <Feather name="calendar" size={24} color="gray" />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                    }}
                >
                    {Platform.OS === "android" ? (
                        <>
                            <Pressable
                                style={styles.datePickerTextContainer}
                                onPress={setDatePickerDepart}
                            >
                                <Text>{departDate.toLocaleDateString()}</Text>
                            </Pressable>
                            <Pressable
                                style={styles.datePickerTextContainer}
                                onPress={setDatePickerReturn}
                            >
                                <Text>{returnDate.toLocaleDateString()}</Text>
                            </Pressable>
                        </>
                    ) : (
                        <>
                            <DateTimePicker value={departDate} onChange={(event, date) => setDepartDate(date || new Date())} minimumDate={new Date()} style={styles.datePickerIOS} />
                            <DateTimePicker value={returnDate} onChange={(event, date) => setReturnDate(date || new Date())} minimumDate={departDate} style={styles.datePickerIOS} />
                        </>
                    )}
                </View>
            </View>

            <Button title="Search" onPress={onSearchPress} />
        </View>
    );
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
        fontWeight: "500",
        fontSize: 16,
        marginVertical: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    dateContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    datePickerTextContainer: {
        marginHorizontal: 4,
        paddingHorizontal: 8,
        backgroundColor: "gainsboro",
        borderRadius: 5,
        marginVertical: 2,
    },
    datePickerIOS: {
        marginHorizontal: 4,
        paddingHorizontal: 8,
        backgroundColor: "gainsboro",
        borderRadius: 5,
        marginVertical: 2,
    }
});
