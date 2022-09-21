import React from 'react'
import style from '../styles/TextContent.module.css'

export default function TextContent() {


    const blog = `<h1>The iPhone 14 is highly capable. Its chipset can handle everything from day-to-day tasks to graphics-intensive gaming. Its cameras are capable of very good photos, and it records the best video clips youll see from any phone in its class. This is all true of the 14, but its also true of the iPhone 13.
    
    The iPhone 14 is a very good phone, with a handful of useful upgrades over the 13. But its a small handful, and that leaves the 14 in a tight spot. The iPhone 13, which came out a year ago and Apple is still selling, is nearly identical to the 14 and $100 cheaper, while the iPhone 14 Pro introduces a lot of interesting new features. And the upcoming iPhone 14 Plus has the same hardware as the 14 but a massive 6.7-inch screen. If the Great iPhone Mini Experiment taught us anything, its that people love big screens. 
    
    The iPhone 14 does have some genuinely cool new features: an upgraded sensor on the main camera and a slightly wider aperture and autofocus on the selfie cam; car crash detection; and satellite SOS, but aside from those, it really is almost identical to the iPhone 13. It looks the same, with the same flat aluminum rails and roughly the same dimensions. There are still just two rear cameras — a standard wide and ultrawide — but the camera bump is a bit chunkier to accommodate the bigger main sensor, enough so that an iPhone 13 case wont fit.</h1>`


  return (
    <>
        <div className={style.textBody} >
        <h1 className={style.title} >The Iphone 14 Pro and Iphone 14 are here!</h1>
        <div className={style.blog} >
        {/* {blog} */}
        The iPhone 14 is highly capable. Its chipset can handle everything from day-to-day tasks to graphics-intensive gaming. Its cameras are capable of very good photos, and it records the best video clips youll see from any phone in its class. This is all true of the 14, but its also true of the iPhone 13.
      <br/>
    The iPhone 14 is a very good phone, with a handful of useful upgrades over the 13. But its a small handful, and that leaves the 14 in a tight spot. The iPhone 13, which came out a year ago and Apple is still selling, is nearly identical to the 14 and $100 cheaper, while the iPhone 14 Pro introduces a lot of interesting new features. And the upcoming iPhone 14 Plus has the same hardware as the 14 but a massive 6.7-inch screen. If the Great iPhone Mini Experiment taught us anything, its that people love big screens. 
      <br/>
    The iPhone 14 does have some genuinely cool new features: an upgraded sensor on the main camera and a slightly wider aperture and autofocus on the selfie cam; car crash detection; and satellite SOS, but aside from those, it really is almost identical to the iPhone 13. It looks the same, with the same flat aluminum rails and roughly the same dimensions. There are still just two rear cameras — a standard wide and ultrawide — but the camera bump is a bit chunkier to accommodate the bigger main sensor, enough so that an iPhone 13 case wont    fit.
        </div>
        </div>
    </>
  )
}
