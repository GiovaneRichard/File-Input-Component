import { Upload } from "@/components/Upload";
import { Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box w="100vw" h="100vh">
      <Upload />
    </Box>
  );
}
