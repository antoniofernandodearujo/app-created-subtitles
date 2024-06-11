import { useState } from 'react';
import styles from './styles';
import {
    Text,
    View,
    Image,
} from 'react-native';

import Button from '../Button/Button';
import CardSubtitle from '../CardSubtitle/CardSubtitle';

const Header: React.FC = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageSelected = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Clique no botão acima para selecionar uma imagem.</Text>
            <Text style={styles.text}>E tenha legenda incrível ✨​☺️​​ </Text>
             
            <Button onImageSelected={handleImageSelected} type={1} />
            {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%' }} />}
        </View>
    )
}

export default Header;