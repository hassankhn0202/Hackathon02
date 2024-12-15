import Image from "next/image";


export default function Hero(){
    return(
        <div className="Hero">
          <div className="HeroImage">
          <Image src={"/Hero.png"}
            width={1440} height={100} alt="Picture of the author" />
            <div className="herotext bg-[#FFF3E3">
                <h6>New Arrival</h6>
                <h3>Discover Our <br />New Collection </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
                </p>
                <button className="buybttn">BUY NOW</button>
            </div>
          </div>
        </div>
    );
}