import "./SimpleCart.scss";
import { removeProduct } from "../../store/cart";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
} from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa';

import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CloseIcon } from '@chakra-ui/icons';

function SimpleCart() {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu isOpen={isOpen}>
            <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />} fontWeight="light" backgroundColor='inherit' onClick={() => setIsOpen(!isOpen)}>
                <span style={{ opacity: 0.6 }}>
                    <FaShoppingCart size={20} />
                    ({cart.length})
                </span>
            </MenuButton>
            <MenuList onClose={() => setIsOpen(false)}>
                {
                    cart.map(item => (
                        <MenuItem key={item.id} minH='48px' _hover={{ backgroundColor: 'inherit' }} _focus={{ backgroundColor: 'inherit' }}>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src={item.photo}
                                alt={item.title}
                                mr='12px'
                            />
                            <span>{item.title}</span>
                            <Button
                                onClick={() => dispatch(removeProduct(item))}
                                size="sm"
                                backgroundColor="rgba(0, 0, 0, 0.1)"
                                ml={10}
                            >
                                <CloseIcon />
                            </Button>

                        </MenuItem>

                    ))
                }
                {cart.length > 0 && (

                    <div className="view-cart">
                        <Link to='/cart'>
                            <Button colorScheme='teal' variant='outline'>
                                View All Cart
                            </Button>
                        </Link>
                    </div>
                )
                }


            </MenuList>
        </Menu>
    );
}

export default SimpleCart;
