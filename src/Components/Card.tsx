import axios from "axios";
import { useEffect, useState } from "react";
import { quoteAPI } from "../assets/data";
import Marquee from "react-fast-marquee";

export const Card = () => {

    const [quote, setQuote] = useState("");
      const [author, setAuthor] = useState("");
    
     
      useEffect(() => {
        const getQuote = async () => {
          try {
            await axios.get(quoteAPI).then((res) => {
              setQuote(res.data.quote);
              setAuthor(res.data.author);
            });
          } catch (error) {
            console.log(error, "Error fetching quotes");
          }
        };
    
        getQuote();
    
        const quoteInterval =setInterval(() => {
          getQuote();
        }, 5000);
    
        return () => clearInterval(quoteInterval);
      }, []);
  return (
      <div className="bg-white-30 px-5 py-8 w-[1000px] h-[200px] quote-box font-mono rounded-md overflow-hidden relative box-border">
        <div className="relative top-15 left-10 right-10 w-full h-full flex items-center">
          <Marquee>
            <p className="text-2xl whitespace-nowrap">{quote}</p>
          </Marquee>
        </div>
        <div className=" text-right font-semibold">
          <span className="">~ by {author}</span>
        </div>

      </div>
  )
}
