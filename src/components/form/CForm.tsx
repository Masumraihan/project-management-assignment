import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: FieldValues;
  resolver?: any;
};

type TCFormProps = {
  children: ReactNode;
  onsubmit: SubmitHandler<any>;
} & TFormConfig;

const CForm = ({ children, onsubmit, defaultValues, resolver }: TCFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (formConfig) {
    formConfig["defaultValues"] = defaultValues;
  }

  const submit: SubmitHandler<FieldValues> = (data) => {
    onsubmit(data);
  };

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(submit)} layout='vertical'>
        {children}
      </Form>
    </FormProvider>
  );
};

export default CForm;
