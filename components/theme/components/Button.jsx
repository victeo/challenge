import React from 'react';
import { LuLocateFixed } from 'react-icons/lu';

export default function Button({ text, backgroundColor, color, padding, borderRadius, fontSize, classes, width, height, img, icon }) {
    // const renderIcon = () => {
    //     if (icon) {
    //         const { name, family } = icon;
    //         console.log(icon)
    //         if (family === 'react-icons/lu') {
    //             if (name === 'LuLocateFixed') {
    //                 return <LuLocateFixed />;
    //             } else if (name === 'FaUser') {
    //                 return <FaUser />;
    //             }
    //         }
    //     }

    //     return null;
    // };

    return (
        <button
            style={{
                backgroundColor: backgroundColor ?? 'blue',
                color: color ?? 'black',
                padding: padding ?? '0',
                borderRadius: borderRadius ?? '0',
                fontSize: fontSize ?? '12px',
                width: width ?? 'auto',
                height: height ?? 'auto',
                backgroundImage: img ? `url(${img})` : '',
            }}
            className={classes}
        >
            {/* {renderIcon()} */}
            {text}
        </button>
    );
}
