import { View, Text } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import bases from "../../utils/data/basesNitrogenadas";
import aminoAcidos from "../../utils/data/aminoAcidos";

import ModalBox from "./Components/ModalBox";
import Select from "./Components/Select";
import { BaseNitrogenadaType } from "../../@types/baseNitrogenada";

export default function Synthesis() {
  const [base1, setBase1] = useState<BaseNitrogenadaType | null>();
  const [base2, setBase2] = useState<BaseNitrogenadaType | null>();
  const [base3, setBase3] = useState<BaseNitrogenadaType | null>();

  function checkAminoAcidos({str1, str2, str3}:{str1: string, str2: string, str3: string}){
    let aminoAcido = aminoAcidos.find((aminoAcido) => aminoAcido.codon.includes((str1+str2+str3)))
    return aminoAcido
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Escolha suas bases nitrogenadas</Text>
      <View style={styles.SelectRow}>
        <Select array={bases.filter((b) => b.name != "Timina")} setItem={setBase1} title="" selected={base1} />
        <Select array={bases.filter((b) => b.name != "Timina")} setItem={setBase2} title="" selected={base2} />
        <Select array={bases.filter((b) => b.name != "Timina")} setItem={setBase3} title="" selected={base3} />
      </View>
      <View style={styles.SelectRow}>
        <Text style={styles.result}>{checkAminoAcidos({str1: base1?.name[0] || "", str2: base2?.name[0] || "", str3: base3?.name[0] || ""})?.sigla}</Text>
        <Text style={styles.result}>{checkAminoAcidos({str1: base1?.name[0] || "", str2: base2?.name[0] || "", str3: base3?.name[0] || ""})?.nome}</Text>
      </View>
    </View>
  );
}
