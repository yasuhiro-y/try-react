import { EmailIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useToast,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Profile() {
  const [followers, setFollowers] = useState(0);
  const toast = useToast();
  const handleClick = () => {
    setFollowers(followers + 1);

    toast({
      title: 'Follow',
      description: 'You followed!',
      status: 'success',
      duration: 3000,
      isClosable: true,
      colorScheme: 'pink',
    });
  };

  return (
    <Box bg="gray.50" minHeight="100vh">
      <Box
        bgImage="https://images.unsplash.com/photo-1682553319940-8db6c8ddee82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
        bgSize="cover"
        bgPosition="center"
        h="240px"
      />
      <Flex maxW="container.lg" mx="auto" direction="column">
        <Avatar
          size="xl"
          name="John Doe"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alignSelf="center"
          mt="-70px"
          mb={4}
          borderWidth="4px"
          borderColor="white"
        />
        <Stack direction="column" spacing={2} alignItems="center">
          <Heading as="h1" size="lg">
            John Doe
          </Heading>
          <Text fontSize="xl" color="gray.500">
            @johndoe
          </Text>
        </Stack>
        <Stack direction={'row'} justifyContent={'center'} mt={4}>
          <Button
            variant={'solid'}
            colorScheme="pink"
            color="white"
            onClick={handleClick}
          >
            Follow
          </Button>
          <Button leftIcon={<EmailIcon />}>Contact</Button>
        </Stack>
        <Stack direction={'row'} justifyContent={'center'} mt={4} gap="2">
          <Stack direction={'row'}>
            <Text>Following </Text>
            <Text fontWeight={'bold'}>{followers} </Text>
          </Stack>
          <Stack direction={'row'}>
            <Text>Follower </Text>
            <Text fontWeight={'bold'}>20 </Text>
          </Stack>
        </Stack>
        <SimpleGrid columns={[1, 2, 3]} gap={8} px={[4, 8, 16]} mt={12}>
          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            overflow="hidden"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="Project 1"
              h={48}
              w="100%"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                Project 1
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus auctor fringilla orci, vel tempus eros vulputate ac.
              </Text>
              <Stack direction={'row'} spacing={2}>
                <Link>GitHub</Link>
                <Link>Live Demo</Link>
              </Stack>
            </Box>
          </Box>
          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            overflow="hidden"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="Project 2"
              h={48}
              w="100%"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                Project 2
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus auctor fringilla orci, vel tempus eros vulputate ac.
              </Text>
              <Stack direction={'row'} spacing={2}>
                <Link>GitHub</Link>
                <Link>Live Demo</Link>
              </Stack>
            </Box>
          </Box>
          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            overflow="hidden"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="Project 3"
              h={48}
              w="100%"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                Project 3
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus auctor fringilla orci, vel tempus eros vulputate ac.
              </Text>
              <Stack direction={'row'} spacing={2}>
                <Link>GitHub</Link>
                <Link>Live Demo</Link>
              </Stack>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
