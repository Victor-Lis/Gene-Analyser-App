import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { BaseNitrogenadaType } from "../../../../@types/baseNitrogenada";

type Props = {
  array: BaseNitrogenadaType[];
  selected?: BaseNitrogenadaType | null;
  title: string;
  setItem: React.Dispatch<
    React.SetStateAction<BaseNitrogenadaType | null | undefined>
  >;
};

export default function Select({ array, selected, title, setItem }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  if (open) {
    return (
      <ScrollView style={styles.Container}>
        {array.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.SelectBox}
            onPress={() => {
              setOpen(false);
              setItem(item);
            }}
          >
            <Text style={styles.SelectBoxText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.InputBox}>
        <TouchableOpacity
          style={styles.SelectBox}
          onPress={() => {
            setOpen(true);
          }}
        >
          {selected?.name ? (
            <Text style={styles.SelectBoxText}>{selected.name}</Text>
          ) : (
            <Text style={styles.SelectBoxText}>Escolha</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
