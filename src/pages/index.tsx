import PortfolioItem, {
  PortfolioItemProps,
} from '@/components/molecules/domain/PortfolioItem';
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

  const portfolioItemList: PortfolioItemProps[] = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1682553319940-8db6c8ddee82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      title: 'aaa1111',
      description: 'aaa',
      githubUrl: 'aaa',
      liveDemoUrl: 'aaa',
      likeCount: 31,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1556010042-70cd6e3433fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      title: 'bbbb33333333',
      description: 'bbbb',
      githubUrl: 'aaa',
      liveDemoUrl: 'aaa',
      likeCount: 31,
    },
    {
      imageUrl: 'ccc',
      title: 'ccc',
      description: 'aaa',
      githubUrl: 'aaa',
      liveDemoUrl: 'aaa',
      likeCount: 31,
    },
  ];

  return (
    <Box bg="gray.50" minHeight="100vh">
      {/* カバー */}
      <Box
        bgImage="https://images.unsplash.com/photo-1682553319940-8db6c8ddee82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
        bgSize="cover"
        bgPosition="center"
        h="240px"
      />
      {/* アバター */}
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
        {/* 名前 */}
        <Stack direction="column" spacing={2} alignItems="center">
          <Heading as="h1" size="lg">
            John Doe
          </Heading>
          <Text fontSize="xl" color="gray.500">
            @johndoe
          </Text>
          {/* ボタン*/}
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
        {/* フォロー数・フォロワー数 */}
        <Stack direction={'row'} justifyContent={'center'} mt={4} gap="2">
          <Stack direction={'row'}>
            <Text color="red.400">Follower </Text>
            <Text fontWeight={'bold'}>20 </Text>
          </Stack>
          <Stack direction={'row'}>
            <Text>Following </Text>
            <Text fontWeight={'bold'}>{followers} </Text>
          </Stack>
        </Stack>
        {/* ポートフォリオ */}
        <SimpleGrid columns={[1, 2, 3]} gap={8} px={[4, 8, 16]} mt={12}>
          {portfolioItemList.map(item => {
            return <PortfolioItem {...item} />;
          })}
        </SimpleGrid>
        <Box p={10}>
          {portfolioItemList.map(item => {
            return <Text>{item.title}</Text>;
          })}
        </Box>{' '}
      </Flex>
    </Box>
  );
}
