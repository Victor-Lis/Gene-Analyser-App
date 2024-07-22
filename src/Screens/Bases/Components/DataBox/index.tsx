import { View, Text } from 'react-native';
import { BaseNitrogenadaType } from '../../../../@types/baseNitrogenada';
import { styles } from './styles';

export type DataBoxProps = {
  connectTo: "DNA" | "RNA"
  item: BaseNitrogenadaType | null | undefined
}

export default function DataBox({connectTo, item}: DataBoxProps) {
 return (
   <View style={styles.Container}>
    <Text style={styles.Title}>Conexão no <Text>{connectTo}</Text></Text>
    {connectTo == "DNA" ? (
      <Text style={[styles.ResultText, {color: !item?.connectionInDNA ? "red" : "#003cff"}]}>{item?.connectionInDNA ? item?.connectionInDNA : "Não liga"}</Text>
    ) : (
      <Text style={[styles.ResultText, {color: !item?.connectionInRNA ? "red" : "#003cff"}]}>{item?.connectionInRNA ? item?.connectionInRNA : "Não liga"}</Text>      
    )}
   </View>
  );
}