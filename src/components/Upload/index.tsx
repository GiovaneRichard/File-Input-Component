import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { validationSchema } from "./schema";
import { InitiationFormValues, IFormValues } from "./type";
import Head from "next/head";
import { SlPicture } from "react-icons/sl";

export const Upload = () => {
  return (
    <Flex align="center" justifyContent="center" bg="#0a101e" w="100%" h="100%">
      <Box>
        <Head>
          <title>E-Paper - Atividades</title>
        </Head>
      </Box>

      <Formik
        initialValues={InitiationFormValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form>
            <Box>
              <FormControl position="relative">
                <FormLabel
                  w="300px"
                  h="160px"
                  borderRadius="lg"
                  border="3.5px dashed gray"
                  cursor="pointer"
                >
                  <Center position="absolute" left="35%" top="25%">
                    <SlPicture fontSize="5rem" />
                  </Center>
                </FormLabel>
                <Input type="file" zIndex={-1} hidden />
              </FormControl>
            </Box>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
