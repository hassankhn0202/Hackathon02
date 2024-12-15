export default function Footer(){
    return(
        <div className="footer w-1440 h-505">
          <footer>
            <div className="footer p-5 border-t-2 leading-10 border-gray-300">
              <div className="w-[14rem]">
                <h2 className="font-bold text-[2rem]">Funiro</h2>
                <p className="leading-none">400 University Drive Suit 200Coral Gables, FL 33134 USA</p>
              </div>
              <div>
                <h4>Navbar</h4>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4>News letter</h4>
                <input type="text" placeholder="Your Email" />
                <button type="submit" className="font-bold">SUBSCRIBE</button>
              </div>

            </div>
            <div className="para">
              <hr />
              <p>2023 furino. All rights reversed</p>
            </div>
          </footer>
        </div>
    );
}