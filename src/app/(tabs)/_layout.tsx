import { Tabs } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            // tabBarActiveTintColor: '#000',
            //   tabBarInactiveTintColor: '#000',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#fff',
            }
        }}>
            <Tabs.Screen name="index" options={{
                headerShown: true, title: 'Home', tabBarIcon: ({ color, size }) => (
                    <Feather name="home" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="search" options={{
                headerShown: true, title: 'Search', tabBarIcon: ({ color, size }) => (
                    <Feather name="search" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="plus" options={{
                headerShown: true, title: 'Plus', tabBarIcon: ({ color, size }) => (
                    <Feather name="plus" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="notification" options={{
                headerShown: true, title: 'Notification', tabBarIcon: ({ color, size }) => (
                    <Feather name="heart" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                headerShown: true, title: 'Profile', tabBarIcon: ({ color, size }) => (
                    <Feather name="user" color={color} size={size} />
                )
            }} />
        </Tabs>
    );
}