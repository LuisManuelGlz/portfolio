import React, { ReactNode } from 'react';
import { Heading, HeadingProps, useColorModeValue } from '@chakra-ui/react';
import { AnimationProps, motion, Variants } from 'framer-motion';

const titleVariants: Variants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    transition: {
      when: 'afterChildren',
    },
  },
};

const MotionHeading = motion<Omit<HeadingProps, 'transition'>>(Heading);

type Props = {
  children: ReactNode;
} & AnimationProps;

const Title = ({ children, ...rest }: Props) => {
  return (
    <MotionHeading
      size={'4xl'}
      textAlign="center"
      fontSize={{ base: '5xl', sm: '7xl' }}
      marginBottom={8}
      color="primary.500"
      sx={{
        '*:nth-of-type(odd)': {
          display: 'block',
          color: useColorModeValue('gray.700', 'whiteAlpha.900'),
        },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={titleVariants}
      {...rest}
    >
      {children}
    </MotionHeading>
  );
};

export default Title;
