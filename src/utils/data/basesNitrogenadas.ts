import { BaseNitrogenadaType } from "../../@types/baseNitrogenada";

export default [
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
] as BaseNitrogenadaType[]