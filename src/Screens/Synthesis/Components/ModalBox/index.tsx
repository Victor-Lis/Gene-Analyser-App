import { View, Text } from 'react-native';
import { styles } from './styles';

type ModalBoxProps = {
    toggleModal: () => void
    title: string
}

export default function ModalBox({title}: ModalBoxProps) {
 return (
   <View>
    <Text>{title}</Text>
   </View>
  );
}