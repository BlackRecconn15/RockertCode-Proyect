import { Text, View } from 'react-native'
import Constants from 'expo-constants'

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow:1 }}>
            <Text> Buenas</Text>
        </View>
    )
}

export default Main