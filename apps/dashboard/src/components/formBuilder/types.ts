type Field = {
  id?: string;
  label?: string;
  name?: string;
  type?: string;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
};

export type FormBuilderProps = {
  formAction: (FormData: FormData) => void;
  fields: Field[];
};
