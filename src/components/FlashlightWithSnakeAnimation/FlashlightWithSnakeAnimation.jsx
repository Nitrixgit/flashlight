import React, { useState, useEffect } from 'react';
import style from './FlashlightWithSnakeAnimation.module.css';
import { getBrowser } from '../../utils/getBrowser';



const FlashlightWithSnakeAnimation = ({
    height,
    imgFront,
    imgBack,
    imgFrontId,
    imgBackId,
    href
}) => {

    
    const [resX, setResX] = useState();
    const [resY, setResY] = useState();

    const [browserSafari, setBrowserSafari] = useState(false);
    useEffect(() => {
        let browser = getBrowser();
        setBrowserSafari(browser.isSafari);
        if (browserSafari) stylesForBrowserSafari()
    }, [browserSafari]);


    const loopAnimation = (mouse, block) => {

        const loop = document.querySelectorAll(`.${imgBackId}`);

        let x = mouse.pageX;
        let y = mouse.pageY;
        let percW = block.offsetWidth / 100;
        let percH = block.offsetHeight / 100;
        let resW = x - block.offsetLeft;
        let resH = y - block.offsetTop;
        setResX(resW / percW);
        setResY(resH / percH);

        loop[0].classList.add(`${style.img__back_active}`);
        loop[0].style.clipPath = `circle(100px at ${resX}% ${resY}%)`;
        loop[0].style.setProperty('--x', resX + "%");
        loop[0].style.setProperty('--y', resY + "%");

        loop[1].classList.add(`${style.img__back_active}`);
        loop[1].style.clipPath = `circle(95px at ${resX}% ${resY}%)`;
        loop[1].style.setProperty('--x', resX + "%");
        loop[1].style.setProperty('--y', resY + "%");

        loop[2].classList.add(`${style.img__back_active}`);
        loop[2].style.clipPath = `circle(92px at ${resX}% ${resY}%)`;
        loop[2].style.setProperty('--x', resX + "%");
        loop[2].style.setProperty('--y', resY + "%");

        loop[3].classList.add(`${style.img__back_active}`);
        loop[3].style.clipPath = `circle(88px at ${resX}% ${resY}%)`;
        loop[3].style.setProperty('--x', resX + "%");
        loop[3].style.setProperty('--y', resY + "%");

        loop[4].classList.add(`${style.img__back_active}`);
        loop[4].style.clipPath = `circle(85px at ${resX}% ${resY}%)`;
        loop[4].style.setProperty('--x', resX + "%");
        loop[4].style.setProperty('--y', resY + "%");
    }

    const animationStart = () => {

        if (!browserSafari) {
            const loop = document.querySelectorAll(`.${imgBackId}`);
            loop.forEach((item) => {
                item.style.visibility = 'visible';
                item.classList.add(`${style.loop__start}`);

                setTimeout(() => {
                    item.classList.remove(`${style.loop__start}`);
                }, 500);
            })
        }
    }

    const animationEnd = () => {
        const loop = document.querySelectorAll(`.${imgBackId}`);
        loop.forEach((item) => {
            item.style.clipPath = `circle(0px at ${resX}% ${resY}%)`;
            item.classList.remove(`${style.img__back_active}`);
        })
    }

    const stylesForBrowserSafari = () => {
        const loop = document.querySelectorAll(`.${imgBackId}`);
        loop.forEach((item) => {
            item.style.transition = '.0ms ease';
        })
    }

    return (
        <div className={style.wrapper}
            style={{ height: height }}
            onMouseMove={(e) => loopAnimation(e, e.target.parentNode)}
            onMouseEnter={animationStart}
            onMouseLeave={animationEnd}
            onClick={() => window.open(href)}
        >


            <img className={style.img__back + ' ' + imgBackId} src={imgBack} alt="" />
            <img className={style.img__back + ' ' + imgBackId} src={imgBack} alt="" />
            <img className={style.img__back + ' ' + imgBackId} src={imgBack} alt="" />
            <img className={style.img__back + ' ' + imgBackId} src={imgBack} alt="" />
            <img className={style.img__back + ' ' + imgBackId} src={imgBack} alt="" />


            <img className={style.img__front + ' ' + imgFrontId} src={imgFront} alt="" />

        </div>
    )
}

export default FlashlightWithSnakeAnimation;