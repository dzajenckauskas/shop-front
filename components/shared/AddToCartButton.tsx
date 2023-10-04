import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToWishlist, removeFromWishlist, selectWishlist } from "../../app/wishlistSlice";
import { getTheme } from "../layout/Theme";
import { ProductType } from "./ProductTypes";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

type Props = {
    product?: ProductType;
}

export const AddToCartButton = ({ product }: Props) => {
    const dispatch = useAppDispatch();
    const theme = getTheme()
    const wishlist = useAppSelector(selectWishlist);
    const likedItem = wishlist.products.find((o) => o.id === product?.id) !== undefined;

    const handleLike = () => {
        if (product)
            likedItem ? dispatch(removeFromWishlist(product)) : dispatch(addToWishlist(product));
    }
    return (
        <IconButton
            size="small"
            onClick={handleLike}
        >
            {likedItem && <AddShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />}
            {!likedItem && <AddShoppingCartIcon sx={{ color: theme.palette.grey[500] }} />}
        </IconButton>
    )
}