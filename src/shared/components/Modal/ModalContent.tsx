import styles from "./styles";

import {
    Text,
    View,
} from 'react-native';

const CaptionContent: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a modal!</Text>
        </View>
    )
}

export default CaptionContent;