import { PropsWithChildren } from 'react';
import { useForm, FormProvider as ReactFormProvider } from 'react-hook-form';

const CustomFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm();

  return <ReactFormProvider {...methods}>{children}</ReactFormProvider>;
};

export default CustomFormProvider;
