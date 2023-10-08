import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  file: Yup.string().required("O Campo é obrigatório."),
});
