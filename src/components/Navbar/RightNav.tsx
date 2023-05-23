"use client";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import { AboutIcon, JobBoardIcon } from "../../components/icons";
import Buttons from "../../components/buttons";

type RightNavProps = {
  open: boolean;
  onClick: () => void;
};

const RightNav = ({ open, onClick }: RightNavProps) => {
  return (
    <>
      <Box
        display={{ base: "block", lg: "flex" }}
        justifyContent="space-between"
        columnGap="12rem"
        flexFlow={{ base: "column nowrap", lg: "row nowrap" }}
        backgroundColor={{ base: "#fff", lg: "transparent" }}
        color="#1E3747"
        position="fixed"
        transform={{
          base: open ? "translateX(0)" : "translateX(100%)",
          lg: "none",
        }}
        top="0"
        right="0"
        height={{ base: "350px", lg: "auto" }}
        width={{ base: "250px", lg: "auto" }}
        padding={{ base: "3rem" }}
        transition="transform 0.3s ease-in-out"
        pt={{ lg: "10px" }}
        pr={{ lg: "8.5rem" }}
        textAlign={{ base: "center" }}
        mt={{ base: "35px" }}
      >
        <Box
          display={{ base: "block", lg: "flex" }}
          alignItems="center"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="lighter"
          listStyleType="none"
          cursor="pointer"
        >
          <Menu>
            <MenuButton
              as={Button}
              bg="white"
              rightIcon={<ChevronDownIcon ml="-10px" />}
              fontSize="16px"
              fontWeight="500"
              _hover={{ backgroundColor: "white", color: "black" }}
              p="0"
            >
              GDG Ibadan
            </MenuButton>
            <MenuList
              fontSize="16px"
              fontWeight="500"
              _hover={{ backgroundColor: "white", color: "black" }}
            >
              <MenuItem icon={<AboutIcon />}>About GDG Ibadan</MenuItem>
              <MenuItem icon={<JobBoardIcon />}>Job Board</MenuItem>
            </MenuList>
          </Menu>
          <Box
            as="li"
            ml={{ base: "0px", lg: "24px" }}
            mt={{ base: "24px" }}
            mb={{ base: "24px" }}
          >
            Events
          </Box>
          <Box as="li" ml={{ base: "0px", lg: "24px" }} mb={{ base: "61px" }}>
            Blog
          </Box>
        </Box>

        <Buttons btnText="Register" background="#E05D2F" color="#fff" />
      </Box>
    </>
  );
};

export default RightNav;
