import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    StatusBar,
    View,
    Image,
    Button,
    TextInput,
} from "react-native";
import { Title } from "react-native-paper";
import { useNameCocktail } from "../hooks/useNameCocktail";
import { Routes } from "../navigation/routes";


export const CocktailSearchScreen = ({ navigation }: any) => {
    const [name, onChangeName] = React.useState("Name");
    const [bool, onChangeBool] = React.useState(false);
    const [datas, onChangeData] = React.useState();
    // const { isLoading, isError, data, refetch } = useNameCocktail(name);

    function navigateToCocktailName() {
        //navigation.navigate(Routes.COCKTAIL_NAME_SCREEN, { name });
        const { isLoading, isError, data, refetch } = useNameCocktail(name);
        if (isLoading) {
            // onChangeData("Loading");
        }
        if (isError) {
            // onChangeData("error");
        }
        // if (data) {
        //     onChangeData(data);
        // }
        onChangeData(data);
        onChangeBool(true)
    }

    return (
        <View style={styles.containerMain}>
            <TextInput
                placeholder="Name"
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
            />
            <Button onPress={() => navigateToCocktailName()} title="Search" />

            {datas && bool ? (
                <Text>{datas.drinks.strDrink}</Text>
            ) : (
                <Text style={styles.text}>En cours de développement.</Text>
            )}
        </View >

    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
    },
    input: {
        borderColor: "blue",
        width: "60%",
        borderWidth: 1.5,
        borderRadius: 30,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 20,
    },
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