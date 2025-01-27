import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps, TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/header/Header';
import PhotosScreen from '../../screens/Photos';
import { SharedScreens, SharedScreensParamList } from '../SharedScreens';
import { TabScreenProps } from '../TabNavigator';

const Stack = createStackNavigator<PhotosStackParamList>();

export default function PhotosStack() {
	return (
		<Stack.Navigator
			initialRouteName="Photos"
			screenOptions={{
				headerStyle: { backgroundColor: '#08090D' },
				headerTintColor: '#fff',
				...TransitionPresets.ModalFadeTransition
			}}
		>
			<Stack.Screen name="Photos" component={PhotosScreen} options={{ header: Header }} />
			{SharedScreens(Stack as any)}
		</Stack.Navigator>
	);
}

export type PhotosStackParamList = {
	Photos: undefined;
} & SharedScreensParamList;

export type PhotosStackScreenProps<Screen extends keyof PhotosStackParamList> =
	CompositeScreenProps<
		StackScreenProps<PhotosStackParamList, Screen>,
		TabScreenProps<'PhotosStack'>
	>;
