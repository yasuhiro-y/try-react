import { Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';

export type PortfolioItemProps = {
  imageUrl: string;
  title: string;
  description: string;
  githubUrl: string;
  liveDemoUrl: string;
  likeCount: number;
};

const PortfolioItem = ({
  imageUrl,
  title,
  description,
  githubUrl,
  liveDemoUrl,
  likeCount,
}: PortfolioItemProps) => (
  <Box
    bg="white"
    boxShadow="md"
    borderRadius="md"
    overflow="hidden"
    borderWidth="1px"
    borderColor="gray.200"
  >
    <Image src={imageUrl} alt={title} h={48} w="100%" objectFit="cover" />
    <Box p={4}>
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {description}
      </Text>
      <Stack direction={'row'} spacing={2}>
        <Link href={githubUrl}>GitHub</Link>
        <Link href={liveDemoUrl}>Live Demo</Link>
      </Stack>
      <Text>LikeCount: {likeCount}</Text>
    </Box>
  </Box>
);

export default PortfolioItem;
