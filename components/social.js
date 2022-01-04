import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";

export default function Social() {
  return (
    <Center p={8}>
      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
        {/* Google */}
        <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Continue with Google</Text>
          </Center>
        </Button>
        {/* Facebook */}
        <Button w={"full"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}
