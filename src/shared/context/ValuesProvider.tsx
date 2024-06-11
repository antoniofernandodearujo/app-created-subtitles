import React, { createContext, useState } from 'react';

// Defina o tipo para os valores da legenda
type CaptionValues = {
    generation: string;
    setGeneration: React.Dispatch<React.SetStateAction<string>>;
    image: string | null;
    setImage: React.Dispatch<React.SetStateAction<string | null>>;
    resultText: string;
    setResultText: React.Dispatch<React.SetStateAction<string>>;
};

// Crie o contexto
export const CaptionContext = createContext<CaptionValues>({
    generation: '',
    setGeneration: () => {},
    image: null,
    setImage: () => {},
    resultText: '',
    setResultText: () => {},
});

type ValuesProviderProps = {
    children: React.ReactNode;
};

// Crie o provedor do contexto
export const ValuesProvider: React.FC<ValuesProviderProps> = ({ children }) => {
    // Defina o estado inicial dos valores da legenda
    const [generation, setGeneration] = useState<string>('Z');
    const [image, setImage] = useState<string | null>(null);
    const [resultText, setResultText] = useState<string>('');

    return (
        <CaptionContext.Provider 
            value={{
                generation,
                setGeneration,
                image,
                setImage,
                resultText,
                setResultText,
            }}
        >
            {children}
        </CaptionContext.Provider>
    );
};