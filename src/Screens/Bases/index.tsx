import { View, Text } from 'react-native';
import { useState } from 'react';

import { BaseNitrogenadaType } from '../../@types/baseNitrogenada';

import Select from './Components/Select';
import DataBox from './Components/DataBox';

import bases from '../../utils/data/basesNitrogenadas'

export default function Bases() {
  const [base, setBase] = useState<BaseNitrogenadaType | null>()

 return (
   <View style={{flex: 1, justifyContent: "center", marginBottom: "5%"}}>
    <Select
      array={bases}  
      setItem={setBase}
      title='Escolha'
      selected={base}      
    />  
    <DataBox item={base} connectTo='DNA'/>
    <DataBox item={base} connectTo='RNA'/>
   </View>
  );
}