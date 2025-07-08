import { SocialLink } from "@/types/social";
import { Box, Center, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const renderIcon = (item: SocialLink) => {
  const { icon: Icon, link } = item;

  return (
    <Box
      _hover={{ transform: "scale(1.3)", cursor: "pointer" }}
      transition={"0.2s ease"}
      key={link}
      display="flex"
      alignItems="center"
    >
      <Link
        href={link}
        color="white"
        display="flex"
        alignItems="center"
        h="100%"
        target="_blank"
      >
        <Icon size={25} />
      </Link>
    </Box>
  );
};

const socialLinks: SocialLink[] = [
  { icon: FaGithub, link: "https://github.com/Altair200333" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/ne0ck/" },
  { icon: FaTelegram, link: "https://t.me/petr_mp" },
  { icon: FaInstagram, link: "https://www.instagram.com/_neo_mp_/" },

  { icon: MdOutgoingMail, link: "mailto:petrenko.mixa@gmail.com" },
];

const Navbar: React.FC = () => {
  return (
    <Flex
      bg={"linear-gradient(170deg,  #1e2039, #343561)"}
      boxShadow="md"
      h={"45px"}
    >
      <Center w="100%">
        <Flex gap={4} alignItems="center">
          {socialLinks.map((item) => renderIcon(item))}
        </Flex>
      </Center>
    </Flex>
  );
};

export default Navbar;
