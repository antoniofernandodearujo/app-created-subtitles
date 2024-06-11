import {
    ActivityIndicator,
} from 'react-native';

import colors from '../../../utils/colors';

const Loading: React.FC = () => {
    return (
        <ActivityIndicator size="large" color={colors.purple.dark} />
    )
}

export default Loading;