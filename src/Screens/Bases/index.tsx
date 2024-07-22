import { View, Text } from 'react-native';
import Select from './Components/Select';
import { useState } from 'react';
import { BaseNitrogenadaType } from '../../@types/baseNitrogenada';
import DataBox from './Components/DataBox';

export default function Bases() {
  const [base, setBase] = useState<BaseNitrogenadaType | null>()

 return (
   <View style={{flex: 1, justifyContent: "center", marginBottom: "5%"}}>
    <Select
      array={[
        {
          name: "Adenina",
          connectionInDNA: "Timina",
          connectionInRNA: "Uracila",
        },
        {
          name: "Timina",
          connectionInDNA: "Adenina",
          connectionInRNA: null,
        },
        {
          name: "Guanina",
          connectionInDNA: "Citosina",
          connectionInRNA: "Citosina",
        },
        {
          name: "Citosina",
          connectionInDNA: "Guanina",
          connectionInRNA: "Guanina",
        },
        {
          name: "Uracila",
          connectionInDNA: null,
          connectionInRNA: "Adenina",
        },
      ]}  
      setItem={setBase}
      title='Selecione a base'
      selected={base}      
    />  
    <DataBox item={base} connectTo='DNA'/>
    <DataBox item={base} connectTo='RNA'/>
   </View>
  );
}