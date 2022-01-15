import React from 'react'
import "./Screen.css"
import farmBG from "../images/5.png"
import transparentBG from "../images/p_bgTrans.png"
import windMill from "../images/3.png"
import farmer from "../images/1.png"
import crop from "../images/crop.png"
import cattle from "../images/cattle.png"
import { useEffect } from 'react'


const LandingScreen = () => {

useEffect(() => {
    let stars= document.getElementById('stars');
    let moon= document.getElementById('moon');
    let mountains_behind= document.getElementById('mountains_behind');
    let btn =document.getElementById('btn');
    let text= document.getElementById('text');
    let mountains_front= document.getElementById('mountains_front');
    let header=document.querySelector('header');

    window.addEventListener('scroll',function(){
        let value=window.scrollY;

        if(stars && moon && mountains_front && mountains_behind){
        stars.style.top=value * 0.25 +'px';
        moon.style.right=value * 1.05 +'px';
        mountains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        text.style.marginRight = value * 4 + 'px';
        text.style.MarginTop = value * 1.5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        header.style.top=value * 0.5 + 'px';
        } 
    })
    
}, [])
    

    return (
        <div>
            <header>
            <a href="#" className="logo">Logo</a>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </header>

            <parallax className="parallax">
                <img src={farmBG}  id="stars"/>
                <img src={transparentBG} id="moon"/>
                <img src={windMill} id="mountains_behind"/>
                <h2 id="text">FARM HUB</h2>
                <a href="#sec" id="btn">Explore</a>
                <img src={farmer} id="mountains_front"/>
            </parallax>

            <section>
                <div className="sec secUp" id="sec">
                    <h2>FARM HUB</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid inventore consequatur doloribus cupiditate enim suscipit quam, praesentium totam nesciunt aliquam obcaecati assumenda perferendis corrupti in saepe molestias harum optio, soluta facere aperiam nam dicta quia ipsum! Necessitatibus cum iusto adipisci veritatis placeat temporibus ipsam libero, sint a asperiores neque quas saepe alias esse magnam molestiae! Voluptatem, deleniti quia! Optio repellat fuga nobis voluptatibus modi blanditiis. Doloribus asperiores optio quidem sequi vero provident labore recusandae ducimus exercitationem aliquam ullam quos corporis consequuntur veritatis, sit praesentium? Odio, cupiditate nihil magni dolorem facere tempore, sunt obcaecati dolorum quam quo dolores eos repudiandae cum necessitatibus? Enim ex eveniet eaque magnam facere quos dolores accusamus animi voluptate itaque porro veritatis quaerat quibusdam distinctio doloribus, maxime molestias recusandae. Illo magni fuga, reprehenderit sequi commodi, molestiae suscipit, ex ut quam quos dolorum eveniet magnam eligendi cum animi dicta iure atque? Voluptatum autem repellat obcaecati pariatur accusantium qui, laboriosam consequuntur itaque beatae explicabo reiciendis sequi repellendus! Sunt in, porro aliquam ipsum molestias dolore unde. Est iusto esse error ea eum recusandae unde enim, quibusdam ipsa laborum odit illum vel atque nihil iste ipsam numquam blanditiis doloribus? Nam explicabo quod aperiam iste voluptatem adipisci, perspiciatis excepturi corrupti eum!
                    </p><br/><br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorem, nam corrupti rerum necessitatibus quisquam praesentium facilis vel illum deleniti alias? Qui exercitationem perspiciatis similique tenetur iure beatae aperiam modi eveniet! Perspiciatis incidunt delectus exercitationem illo iste modi ipsam culpa, minima reprehenderit maxime non tempora quaerat libero provident voluptates deserunt! Quibusdam, nihil placeat. Sint ex expedita, libero dolorum quia quam assumenda non, maxime, ipsum perferendis repellat magnam eum iste nihil consequuntur vero quaerat fuga. Provident tempora, sint quas suscipit deserunt accusamus illo laboriosam facere rerum iusto, facilis, adipisci harum quod. Commodi vel autem voluptate amet corrupti nostrum ipsam mollitia molestiae tempora totam, necessitatibus quaerat culpa rem in iusto unde eos perspiciatis libero veniam quos nemo dolorum beatae ratione! Quod ab eos veritatis consectetur eaque soluta molestias? Autem magnam mollitia perferendis quod eius ut libero modi! Saepe, repellendus? Non, tempora impedit eligendi ipsum modi explicabo quasi cum numquam odit! Quod repellat doloribus eveniet fuga qui iste nobis in doloremque quos numquam distinctio atque accusantium, maxime nemo a eius. Quia nulla adipisci veritatis, voluptatibus atque nostrum ullam labore sapiente ratione est tenetur reiciendis, doloribus cum cumque sint aliquid ad veniam fuga quasi quas provident! Eos repellendus incidunt eius? Sunt aspernatur debitis vero!
                    </p><br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum ducimus unde quisquam dolorum, consequuntur, incidunt provident vero possimus itaque repellendus assumenda, illo id nostrum voluptates. A ipsa eaque, quas odio eos totam voluptatem earum dolore ut enim quo dicta est deserunt sequi quam doloribus. Dolorum sequi mollitia amet debitis dolor recusandae, modi neque reprehenderit similique voluptates totam? Officia debitis quas delectus, doloribus ad omnis qui asperiores unde, eligendi beatae assumenda suscipit quibusdam sint quisquam itaque animi ab deleniti obcaecati adipisci repudiandae fugiat nostrum non. Doloremque natus sed voluptates blanditiis magnam deserunt iste ratione expedita! Dolore ut, perferendis aperiam iste natus dolorum similique enim beatae expedita nemo error, obcaecati iusto assumenda architecto tempora perspiciatis nam velit. Dicta accusamus doloremque dolorum porro natus, eos beatae neque voluptate odio recusandae ex, nobis eaque dolor cumque? Consequuntur aspernatur vero ad facere deleniti ullam, rerum expedita fugit nemo optio ex ea! Quibusdam vel debitis architecto dolorem sed ipsam excepturi nesciunt, libero illum! Quasi consequatur accusamus libero maiores! Eum eligendi quibusdam, fugit, nobis doloremque voluptatibus at nemo eveniet illo aut corporis, impedit similique repudiandae officiis. Corrupti modi ex possimus architecto ratione repudiandae officia corporis est ab facilis reprehenderit amet incidunt, magnam illo eaque, sapiente error.
                    </p>
                </div>
                <showcase className="showcase secUp">
                    <div className="container">
                        <div className="row row1">
                            <div className="img-box img-box1">
                                <img src={crop} alt="piggy"/>
                            </div>
                            
                            <div className="text-box">
                                <h2>Heading 1</h2>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ducimus eligendi cum nam asperiores quia atque accusantium delectus voluptas, quaerat, in quam non ut, ab perferendis quidem aut nostrum labore accusamus rem maxime. Iure velit quis possimus dolore, incidunt nisi? Voluptas laboriosam quod amet ipsam! Ad ut maxime repellendus tenetur officiis temporibus similique ea vel dicta, id iusto odio ipsa inventore natus non consectetur labore molestiae aspernatur beatae sint, rem aliquam at vitae? Beatae amet nisi quae obcaecati iste? Nihil, non provident ab rem tenetur culpa, dolore cumque voluptate esse iusto et quos libero sapiente! Ipsa ducimus voluptas quaerat accusamus.
                                <a href="#">Read more!</a>
                            </div>
                        </div>
                        <div className="row row2">
                            <div className="img-box img-box2">
                                <img src={cattle} alt="cow"/>
                            </div>
                            
                            <div className="text-box">
                                <h2>Heading 2</h2>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ducimus eligendi cum nam asperiores quia atque accusantium delectus voluptas, quaerat, in quam non ut, ab perferendis quidem aut nostrum labore accusamus rem maxime. Iure velit quis possimus dolore, incidunt nisi? Voluptas laboriosam quod amet ipsam! Ad ut maxime repellendus tenetur officiis temporibus similique ea vel dicta, id iusto odio ipsa inventore natus non consectetur labore molestiae aspernatur beatae sint, rem aliquam at vitae? Beatae amet nisi quae obcaecati iste? Nihil, non provident ab rem tenetur culpa, dolore cumque voluptate esse iusto et quos libero sapiente! Ipsa ducimus voluptas quaerat accusamus.
                                <a href="#">Read more!</a>
                            </div>
                        </div>
                    </div>
                </showcase>
            </section>

            <footer>
                <div className="links container">
                    <ul className="social-media-links">
                    <li>
                        <a href="#">
                        <i className="fab fa-discord fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fab fa-github fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fas fa-at fa-2x"></i>
                        </a>
                    </li>
                    </ul>    
                    <p>FarmHUB &copy;, 2021 All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default LandingScreen
