import React from "react";
import s from './Main.module.css';
import {MyPosts, PostDareType} from "./MyPosts/MyPosts";
import {MainInfo, MainInfoPropsType} from "./MainInfo/MainInfo";


export const Main = (props: MainInfoPropsType & PostDareType) => {
    return (
        <div className='main'>
            <div>
                <img className={s.img}
                     src="https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm"/>
            </div>
            <MainInfo name='Bekzat K.' date='25 February' city='Almaty' education='KAU' website='bekapng.kz'/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

