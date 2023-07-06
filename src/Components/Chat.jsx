import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import icon1 from '../Icon/2356780.png'
import icon2 from '../Icon/507257.png'
import icon3 from '../Icon/2311524.png'
import ThreeDotClick from './ThreeDotClick'
import PaperClick from './PaperClick'

export default function Chat() {
    const [chatdata, setchatdata] = useState({
        dataChat: [],
        name: '',
        from: '',
        to: ''
    })
    useEffect(() => {


        return async () => {
           
            const values = await axios.get("https://qa.corider.in/assignment/chat?page=0")
            setchatdata({ ...chatdata, dataChat: values.data.chats, name: values.data.name, from: values.data.from, to: values.data.to })
            console.log(values)

        }
    }, [])

    const [height, setHeight] = useState('')
    const [ThreeDot, setThreeDot] = useState('none')
    const ThreeClick = () => {
        if (ThreeDot === 'none') {

            // setThreeDot(true)
            setThreeDot('block')
            setHeight('57vh')
        }
        else {

            setThreeDot('none')
            setHeight('')
            // setThreeDot(false)
        }
    }
    const [PaperClip, setPaperClip] = useState(false)
    const PaperClipClik = () => {
        if (!PaperClip) {

            setPaperClip(true)
        }
        else {

            setPaperClip(false)
        }
    }
    const Time= new Date()
    return (
        <>
            <div className='h-screen overflow-hidden box-border' >
            <header className=' bg-amber-50 '>
                <div className='flex justify-between px-4 h-10 content-center pt-2 '>
                    <div>{Time.getHours() +':'+Time.getMinutes()}</div>
                    <div className='flex space-x-3  '>
                    <img className='w-5 h-5' width="50" height="50" src="https://img.icons8.com/ios-filled/50/high-connection.png" alt="high-connection"/>
                    <img className='w-5 h-5' width="50" height="50" src="https://img.icons8.com/ios/50/wifi--v1.png" alt="wifi--v1"/>
                    <img className='w-5 h-5' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/full-battery.png" alt="full-battery"/>
                    </div>
                </div>
                <div className='flex justify-between p-3'>
                    <div className='flex h-5 space-x-2'>
                        <img src={icon2} alt="icon2" />
                        <h1 className=''>{chatdata.name}</h1>
                    </div>
                    <div className='w-5'>
                        <img src={icon1} alt="icon" />
                    </div>
                </div>
                <div className='flex justify-between p-3'>
                    <div className='flex space-x-3'>
                        <div className='rounded-full border-2 h-10 w-10 grid grid-cols-2 overflow-hidden'>
                            {chatdata.dataChat.map(e => {
                                return (
                                    <>
                                        <img key={e.id} src={e.sender.image} />

                                    </>
                                )
                            })}
                        </div>
                        <div>
                            <h2>From <b>{chatdata.from}</b></h2>
                            <h2>To <b>{chatdata.to}</b></h2>
                        </div>
                    </div>
                    <div >
                        <div>
                        <button className='w-5 ' onClick={ThreeClick} > <img src={icon3} alt="icon3" /></button>
                        {/* <div>{ ThreeDot && <ThreeDotClick />}</div> */}
                <div className='relative z-20 ' style={{display:ThreeDot}} > <ThreeDotClick /></div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className='border overflow-y-scroll h-3/4 sm:h-2/3 ' style={{height:height}}>
                {chatdata.dataChat.map((e,i )=> {
                    return (
                        <>
                            <div key={e.id}>
                                <div className='mt-5'>
                                    <p>{e.time}</p>
                                    <div className='m-2 mt-5'>
                                    <div className={(i+1)%2===0 ? 'flex flex-row-reverse' :'flex'}>
                                    
                                    <img src={e.sender.image} className=' rounded-full h-8' alt="" />
                                     
                                    <div className='border p-2'>
                                        {e.message}
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <footer className=''>
                        {PaperClip && <PaperClick />}
                <div className='flex justify-between border'>
                    <div><input type='text' placeholder='Type a message...' /></div>
                    <div className='flex space-x-2'>
                        <img className='h-6 w-6' onClick={PaperClipClik} width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-paperclips-office-and-office-supplies-flaticons-lineal-color-flat-icons.png" alt="external-paperclips-office-and-office-supplies-flaticons-lineal-color-flat-icons" />
                        <img className='h-6 w-6' width="24" height="24" src="https://img.icons8.com/material-outlined/24/sent.png" alt="sent" />
                    </div>
                </div>
            </footer>
            </div>
        </>
    )
}
