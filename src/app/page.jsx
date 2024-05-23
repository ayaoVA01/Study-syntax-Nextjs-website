
import style from "./home.module.css"
import Image from "next/image"
const Home = () => {
  // throw new Error('Error in Home');
  return <div className={style.container} class="caonssjhdadd">
    <div className={style.textContainer}>
      <h1 className={style.title}>Create Thoughts Agenry</h1>
      <p className={style.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet exercitationem provident, ut nulla nisi laborum reprehenderit architecto dolor ducimus ipsam.
      </p>
      <div className={style.buttons}>
        <button className={style.button}>Learn More</button>
        <button className={style.button}>Contact</button>
      </div>
      <div className={style.brands}>
          <Image src="/e.png" alt="" fill className={style.brandImg}/>
      </div>
    </div>
    <div className={style.imgContainer}>
      <Image src="/aboutt.png" alt="" fill className={style.heroImg}/>
    </div>
  </div>;
};

export default Home;