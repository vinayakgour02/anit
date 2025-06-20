'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './InfiniteScroller.module.css';

const InfiniteScroller = () => {
    // Create two separate arrays for top and bottom rows
    const allImages = Array.from({ length: 24 }, (_, i) => `/Portfolio/p${i + 1}${i + 1 <= 13 && [3, 12, 13].includes(i + 1) ? '.png' : '.jpg'}`);
    const topImages = allImages.slice(0, 12); // First 12 images for top row
    const bottomImages = allImages.slice(12); // Last 12 images for bottom row

    return (
        <div className={styles.scrollerContainer}>
            <div className={styles.row}>
                <div className={`${styles.scrollerGroup} ${styles.rightToLeft}`}>
                    {[...topImages, ...topImages].map((img, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image
                                src={img}
                                alt={`Portfolio ${index + 1}`}
                                width={300}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay Text */}
            <div className={styles.overlayText}>
                <h2 >STAY <br /> AHEAD</h2>
            </div>

            <div className={styles.row}>
                <div className={`${styles.scrollerGroup} ${styles.leftToRight}`}>
                    {[...bottomImages, ...bottomImages].map((img, index) => (
                        <div key={`bottom-${index}`} className={styles.imageWrapper}>
                            <Image
                                src={img}
                                alt={`Portfolio ${index + 13}`}
                                width={300}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteScroller; 