import React from "react";
import { Box, Button, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddToCart = () => {
    // Here you could add functionality to actually add the product to the cart
    toast({
      title: "Added to cart!",
      description: "The product has been added to your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} padding={10} alignItems="center" justifyContent="center">
      <Box flex="1" padding={5}>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMjcwMTY3MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" />
      </Box>
      <Stack flex="2" padding={5} spacing={4} justifyContent="center">
        <Heading as="h1" size="xl">
          Product Title
        </Heading>
        <Text fontSize="2xl" color="green.500">
          $99.99
        </Text>
        <Text fontSize="md" color="gray.600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </Text>
        <Button leftIcon={<FaCartPlus />} colorScheme="blue" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Stack>
    </Flex>
  );
};

export default Index;
