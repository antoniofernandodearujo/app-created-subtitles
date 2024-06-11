import React, { useContext, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from 'react-native';  
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { CaptionContext } from '../../context/ValuesProvider';
import ModalCaption from "../Modal/Modal";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./styles";

const API_KEY = 'AIzaSyAWKecSPu_jp2sb2pi9B5yKCuOj_ZSPM20';
const genAI = new GoogleGenerativeAI(API_KEY);

type ButtonProps = {
    title?: string;
    onPress?: () => void;
    type: number;
    onImageSelected?: (image: string) => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, type, onImageSelected }) => {

    const { generation, resultText, setResultText, setGeneration, setImage } = useContext(CaptionContext);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissões de acesso à biblioteca de mídia para fazer isso funcionar!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const manipResult = await ImageManipulator.manipulateAsync(
                result.assets[0].uri,
                [{ resize: { width: 1080, height: 1080 } }],
                { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
            );

            setImage(manipResult.uri);
            processImage(result.assets[0], generation);

            if(onImageSelected) {
                onImageSelected(manipResult.uri);
            }
        }
    };

    const processImage = async (file: any, generationType: string) => {
        const response = await fetch(file.uri);
        const blob = await response.blob();
        
        const base64EncodedDataPromise = new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]);
          reader.readAsDataURL(blob);
        });
    
        const part = {
          inlineData: { data: await base64EncodedDataPromise, mimeType: blob.type },
        };
    
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        console.log('generation', generationType);

        const prompt = `
            Crie uma legenda para as redes sociais, que seja atrativa, intuitiva, 
            divertida e que não deixe de ser informativa, e também que seja 
            direcionada para a geração ${generationType} com todas as suas características, 
            para a imagem que está sendo exibida.
        `;
        const result = await model.generateContent([prompt, part]);
        const resposta = await result.response;
        const text = await resposta.text();
        setResultText(text);
    };

    if(type === 1) { // select image
        return (
            <TouchableOpacity onPress={pickImage} style={styles.buttonAdd}>
                <MaterialIcons name="add-a-photo" size={20} color="white" />
            </TouchableOpacity>
        )
    }

    if(type === 2) { // generation choice
        return (
            <View style={styles.container}>
                <Text style={styles.textGeneration}>
                    Selecione para que geração deseja gerar a legenda:
                </Text>
                <View style={styles.containerButtonsGeneration} >
                    <TouchableOpacity onPress={() => setGeneration('Z')} style={generation === 'Z' ? styles.buttonActivatedGeneration : styles.buttonDisabledGeneration}>
                        <Text style={styles.text}>Geração Z</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGeneration('Millennials')} style={generation === 'Millennials' ? styles.buttonActivatedGeneration : styles.buttonDisabledGeneration}>
                        <Text style={styles.text}>Millennials</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    if(type === 3) { // modal choice caption
        return (
            <View style={{ flex: 1, position: 'absolute', bottom: 20, alignItems: 'center', justifyContent: 'center' }}>
                <ModalCaption modalVisible={modalVisible} setModalVisible={setModalVisible} resultCaption={resultText} />
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonGenerateCaption}>
                    <Text style={styles.text}>Gerar Legenda</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return null; // Return null if no valid type is provided
}

export default Button;
