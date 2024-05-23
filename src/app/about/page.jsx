
import style from "./about.module.css"
import Image from "next/image";

const AboutPage=()=>{
    return(
        <div className={style.container}>
            <div className={style.textContainer}>
                <h2 className={style.subtitle}>About Us</h2>
                <h1 className={style.title}>We create degital ideas are biger , bolder , brave and better.</h1>
                <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis a repudiandae rem natus omnis enim ad recusandae?</p>
                <div className={style.boxs}>
                    <div className={style.box}>
                        <h1>283 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={style.box}>
                        <h1>283 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={style.box}>
                        <h1>283 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={style.imgContainer}>
                <Image src="/004.png"  alt="About image" fill className={style.img}/>
            </div>

        </div>
    )
}

export default AboutPage;