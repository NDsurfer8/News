import React from 'react'
import { NavigationContainer,useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import NewsListScreen from '../screens/NewsListScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const HeaderLeft = () =>{
    const navigation = useNavigation();
    return(
        <MaterialIcons name='menu' size={24} onPress={()=>{navigation.openDrawer()}}/>
    )
}


const HomeNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerLeft: ()=> <HeaderLeft/> }}>
            <Stack.Screen name='NewsList' component={NewsListScreen} options={{ title: 'All News' }} />
            <Stack.Screen name='NewsDetail' component={NewsDetailScreen} options={{ title: 'News Details' }} />
        </Stack.Navigator>
    )
}
const FavNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerLeft: ()=> <HeaderLeft/> }}>
            <Stack.Screen name='Favorites' component={FavoritesScreen} />
        </Stack.Navigator>
    )
}

const AboutNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerLeft: ()=> <HeaderLeft/> }}>
            <Stack.Screen name='About' component={AboutScreen} />
        </Stack.Navigator>
    )
}


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: false}}>
                <Drawer.Screen name='News' component={TabsNavigator} />
                <Drawer.Screen name='About' component={AboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const TabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}} >
            <Tab.Screen name='Home' component={HomeNav} options={{ tabBarIcon: ({ color, size }) => <Entypo name="home" size={24} color="black" /> }} />
            <Tab.Screen name='Favorite' component={FavNavigator} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="favorite" size={24} color="black" /> }} />
        </Tab.Navigator>
    )

}


export default AppNavigation;