import Home from "../screens/home";
import SearchDestination from "../component/searchDestination";
import Favorites from "../screens/favorite";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Text, View } from "react-native"

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

const HomeStack=()=>{

    return(

        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                
            }}
        >

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen 
            options={{
              title:"Search Destination" ,
              headerShown:true,
              headerTitleStyle:{
                fontSize:18,
                color:"#111111",
                fontFamily:"PlusJakartaSans-Bold",
                
              }
            }} 
            name="Search" 
            component={SearchDestination} />
        </Stack.Navigator>
    );
}

const Tabs=()=>{
return(
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#FFFFFF",
          borderRadius: 15,
          height: 60
        }
      }}
    
    >

   

    <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="home"
                  size={30}
                  color={focused ? "#009B8D" : "#748c94"}
                />
                <Text
                  style={{ color: focused ? "#009B8D" : "#748c94", fontSize: 12 }}
                >
                  Home
                </Text>
              </View>
            )
          }}

      />

    <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name={focused ? "favorite" : "favorite-outline"}
                  size={30}
                  color={focused ? "#009B8D" : "#748c94"}
                />
                <Text
                  style={{ color: focused ? "#009B8D" : "#748c94", fontSize: 12 }}
                >
                  Favorite
                </Text>
              </View>
            )
          }}

      />

   
       
    </Tab.Navigator>
)
}
export default Tabs;