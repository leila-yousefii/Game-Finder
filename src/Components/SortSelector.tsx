import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton  as={Button} rightIcon={<BsChevronDown />}>
          order by: relevance
        </MenuButton>
        <MenuList>
        
            <MenuItem>
           Relevance
            </MenuItem>
    
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
