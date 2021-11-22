import * as React from 'react';
import MyPage from '../screens/Mypage'
import UserInformation from '../screens/UserInformation'
import NickName from '../screens/NickName/Detail'
// import MyFriendList from '../screens/MyFriend/list';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoutButton from '../screens/Logout';


const Stack = createNativeStackNavigator();

export default function MyPageNavigation(){

    return (
        <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
            <Stack.Screen name="Mypage" component={MyPage} />
            <Stack.Screen name="UserInformation" component={UserInformation} />
            <Stack.Screen name="NickName" component={NickName}/>
            {/* <Stack.Screen name="MyFriendList" component={MyFriendList}/> */}
            <Stack.Screen name="LogoutButton" component={LogoutButton}/>
        </Stack.Navigator>
    )
}