import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../res/style/theme';

////////////////////////////////////////////////////////////
import LoginContainer from './login/LoginContainer';
import SignUpContainer from './login/SignUpContainer';
import ForgetContainer from './login/ForgetContainer';
import HomeContainer from './home/HomeContainer';
import ExpenseContainer from './home/ExpenseContainer';
import IncomeContainer from './home/IncomeContainer';
import StatisticContainer from './statistic/StatisticContainer';
import DrawerContainer from './drawer/DrawerContainer';
import UserInfo from '../component/drawer/screen/UserInfo';
import DetailHistoryContainer from './history/DetailHistoryContainer';
import HistoryContainer from './history/HistoryContainer';
import ChangePasswordContainer from './drawer/screen/ChangePasswordContainer';
////////////////////////////////////////////////////////////
//bottom-tab
const Tab = createMaterialBottomTabNavigator();
const bottomTab = () => {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         activeColor={colors.white}
         inactiveColor={colors.black1}
         shifting={true}
         barStyle={{ backgroundColor: colors.red1, height: 48, justifyContent: 'center' }}
         iconStyle={{ width: 48, height: 48 }}
         backBehavior="initialRoute">
         <Tab.Screen
            name="Home"
            component={HomeContainer}
            options={{
               tabBarLabel: 'Trang chủ',
               tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />,
            }}
         />
         <Tab.Screen
            name="History"
            component={HistoryContainer}
            options={{
               tabBarLabel: 'Lịch sử',
               tabBarIcon: ({ color }) => <Icon name="history" color={color} size={24} />,
            }}
         />
         <Tab.Screen
            name="Statistics"
            component={StatisticContainer}
            options={{
               tabBarLabel: 'Thống kê',
               tabBarIcon: ({ color }) => <Icon name="chart-bar" color={color} size={24} />,
            }}
         />
      </Tab.Navigator>
   );
};
//Drawer navigation
const Drawer = createDrawerNavigator();
const Drawers = () => {
   return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContainer {...props} />}>
         <Drawer.Screen name="Drawer" component={bottomTab} />
      </Drawer.Navigator>
   );
};
//stack navigation
const Stack = createStackNavigator();
const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
               ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="SignUp" component={SignUpContainer} />
            <Stack.Screen name="Forget" component={ForgetContainer} />
            <Stack.Screen name="Home" component={Drawers} />
            <Stack.Screen name="Expense" component={ExpenseContainer} />
            <Stack.Screen name="Income" component={IncomeContainer} />
            <Stack.Screen name="UserInfo" component={UserInfo} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordContainer} />
            <Stack.Screen name="DetailHistory" component={DetailHistoryContainer} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default App;
