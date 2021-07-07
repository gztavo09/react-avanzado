import React from 'react';
import { Anchor, Image } from './styles'
const DEFALLT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFALLT_IMAGE, path, emoji = '?'}) => {
    return (
        <Anchor href={path}>
            <Image src={cover} alt=""/>
            {emoji}
        </Anchor>
    );
}