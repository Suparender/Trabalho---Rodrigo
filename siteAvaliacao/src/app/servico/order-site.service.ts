import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSiteService {

  constructor() { }

  varDatails = [
    {
    id:1,
    varName: "Citra Emulator",
    varImg: "https://avatars.githubusercontent.com/u/7605670?s=280&v=4"
    },
    {
    id:2,
    varName: "PPSSPP",
    varImg: "https://m.media-amazon.com/images/I/51Gz5+0MXtL.png"
    },
    {
      id:3,
    varName: "PCSX2",
    varImg: "../../../assets/en-pcsx2-logo-removebg-preview.png"
    },
    {
      id:4,
    varName: "My Boy!",
    varImg: "https://play-lh.googleusercontent.com/M5VS1Or9iH9uCEgL25fHLCseNy4goL2wEesI7iLMXCDLtTil2koQ01tF1NT67oNAHR0=w600-h300-pc0xffffff-pd"
    }
    ]
    
}
