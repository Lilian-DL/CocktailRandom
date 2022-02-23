import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CocktailRandomScreen } from '../screens/CocktailRandomScreen';
import { Routes } from './routes';


type Props = {}
const Tab = createBottomTabNavigator();

export const Navigator = (props: Props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={Routes.RANDOM_SCREEN} component={CocktailRandomScreen} />
                <Tab.Screen name={Routes.COCKTAIL_NAME_SCREEN} component={CocktailRandomScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
