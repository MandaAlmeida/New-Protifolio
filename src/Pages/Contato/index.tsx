import { Formik, Form, FormikHelpers } from "formik";
import Input from "../../components/input";

interface Values {
  Name: string;
  Email: string;
  Mensagens: string;
}

function Contato() {
  return (
    <section className="flex flex-col w-full lg:w-[49%] gap-7 items-center">
      <h3 className="text-xl lg:text-2xl font-bold">Entre me contato</h3>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          Mensagens: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="flex flex-col w-full gap-12">
          <Input text="Nome" type="name" placeholder="Seu nome" />
          <Input text="Email" type="email" placeholder="Seu email" />
          <Input
            as="textarea"
            text="Mensagem"
            type="text"
            placeholder="Sua mensagem"
          />
          <button
            className="p-3 rounded-xl border border-black hover:border-primary hover:text-primary dark:border-white dark:hover:border-primary dark:text-white dark:hover:text-primary"
            type="submit"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </section>
  );
}

export default Contato;
