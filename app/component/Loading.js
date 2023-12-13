"use client"

import React from 'react'

import style from '../pages/loading/loading.module.scss';

function Loading() {

    return (
        <>
           
            <section>
            <div className={style.pulsating_circle}></div>
            </section>
        </>
    )
}

export default Loading
