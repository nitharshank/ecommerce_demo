import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessagesScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';

//Screen names
const homeName = "Home";
const messagesName = "Messages";
const cartName = "Cart";
const accountName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === messagesName) {
                            iconName = focused ? 'mail' : 'mail-outline';
                        }else if (rn === messagesName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === cartName) {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } else if (rn === accountName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70}
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={messagesName} component={MessageScreen} />
                <Tab.Screen name={cartName} component={CartScreen} />
                <Tab.Screen name={accountName} component={AccountScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
