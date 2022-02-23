import React from "react";
import {
    StyleSheet,
    Text,
    StatusBar,
    View,
    Image,
    Button,
} from "react-native";
import { Title } from "react-native-paper";
import { useCocktailRandom } from "../hooks/useRandomCocktail";

export const CocktailRandomScreen = () => {
    const { isLoading, isError, data, refetch } = useCocktailRandom();

    if (isLoading) {
        return <Text>loadingw</Text>;
    }
    if (isError) {
        return <Text>Error</Text>;
    }

    return (
        <View style={styles.containerMain}>
            <Title style={styles.title}>{data.drinks[0].strDrink}</Title>
            <Image style={styles.img} source={{ uri: data.drinks[0].strDrinkThumb }} />
            <Button onPress={() => refetch()} title="Refresh" />
        </View >
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 500 / 2,
        marginBottom: 30,
    },
    containerMain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});