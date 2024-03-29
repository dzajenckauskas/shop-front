import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToWishlist, removeFromWishlist, selectWishlist } from "../../app/wishlistSlice";
import { getTheme } from "../layout/Theme";
import { ProductType } from "./ProductTypes";
import React from 'react';
import { HtmlTooltip } from '../BasicCard';
import Typography from '@mui/material/Typography';

type Props = {
    product?: ProductType;
}

export const WishlistToggleButton = ({ product }: Props) => {
    const dispatch = useAppDispatch();
    const theme = getTheme()
    const wishlist = useAppSelector(selectWishlist);
    const likedItem = wishlist.products.find((o) => o.id === product?.id) !== undefined;

    const handleLike = () => {
        if (product)
            likedItem ? dispatch(removeFromWishlist(product)) : dispatch(addToWishlist(product));
    }
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">
                        {likedItem ? 'Is in wishlist!' : 'Add to wishlist'}
                    </Typography>
                </React.Fragment>}>
            <IconButton
                size="small"
                onClick={handleLike}
            >
                {likedItem && <BookmarkAdd sx={{ color: theme.palette.secondary.main }} />}
                {!likedItem && <BookmarkAdd sx={{ color: theme.palette.grey[500] }} />}
            </IconButton>
        </HtmlTooltip>
    )
}