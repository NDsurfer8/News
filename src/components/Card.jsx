import { View, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'


const Card = ({ navigation }) => {


    return (
        <TouchableOpacity onPress={() => navigation.navigate('NewsDetail')}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../../assets/newsImg.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>dummy text</Text>
                    <MaterialIcons name='favorite-border' color='#72bcd4' size={24} />
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>this is the description </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overFlow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 20,

    },
    description: {
        marginTop: 10,
        fontSize: 15
    }

})