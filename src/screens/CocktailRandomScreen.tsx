import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    StatusBar,
    FlatList,
    View,
    Image,
    Button,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

// import { default as data } from "../../api/data.json";
import { useCocktailRandom } from "../hooks/useRandomCocktail";

export const CocktailRandomScreen = () => {
    const { isLoading, isError, data, refetch } = useCocktailRandom();

    if (isLoading) {
        return <Text>loadingw</Text>;
    }
    if (isError) {
        return <Text>Error</Text>;
    }

    console.log(data.drinks[0]);
    const img = data.drinks[0].strDrinkThumb;
    console.log(img);



    return (
        <View style={styles.containerMain}>
            <Title style={styles.title}>{data.drinks[0].strDrink}</Title>
            <Image style={styles.img} source={{ uri: img }} />
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
    safeContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    containerMain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});