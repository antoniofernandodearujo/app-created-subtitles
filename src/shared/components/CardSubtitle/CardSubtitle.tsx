import styles from './styles';

import {
    Text,
    View,
} from 'react-native';

import Button from '../Button/Button';

const CardSubtitle: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Defina os parâmetros para GERAR a legenda mais precisa!</Text>
            <Button type={2} onPress={() => {}} />
            <Button type={3} onPress={() => {}} />
        </View>
    )
}

export default CardSubtitle;