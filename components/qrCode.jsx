import { React, useState } from 'react'

function ReloadQrCode() {
    const [urlQrCode, setUrlQrcODR] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png')
    const [style, setStyle] = useState({
        display: 'none',
        height: '16.245006657789613vw',
        width: '17.576564580559253vw',
        position: 'absolute', 
        background: '#0052D4',
        borderRadius: '50%',
        borderColor: '#0052D4'
})

    function reloadQrCode() {
        return 'https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-new-technology-barcode-qr-code-vector-classic-qr-code-vector-black-png-image_1886136.jpg'        
    }
    return (
        <div 
        onMouseEnter={e => {
            setStyle({display: 'block', position: 'absolute',  background: '#0052D4', top:'0', height: '16.245006657789613vw', width: '17.576564580559253vw', borderRadius: '50%', borderColor: '#0052D4'});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none', position: 'absolute', left: '15.91%', right: '15.91%', top: '15.91%', bottom: '15.91%',  background: '#0052D4', height: '16.245006657789613vw', width: '17.576564580559253vw', borderRadius: '50%', borderColor: '#0052D4'})
        }}>
            <img style={{width: '17.576564580559253vw', height: '16.245006657789613vw'}} src={urlQrCode}></img>
            <button style={style} onClick={() => setUrlQrcODR(reloadQrCode())}>
            <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.97251 18.25C5.89106 20.8572 7.63206 23.0953 9.93319 24.6269C12.2343 26.1586 14.9709 26.901 17.7306 26.7422C20.4903 26.5833 23.1237 25.5319 25.2339 23.7463C27.344 21.9607 28.8168 19.5377 29.4302 16.8423C30.0435 14.147 29.7643 11.3253 28.6346 8.80239C27.5048 6.27951 25.5858 4.19212 23.1665 2.85475C20.7473 1.51737 17.959 1.00245 15.2216 1.38758C12.4843 1.77271 9.9463 3.03701 7.99001 4.99L1.41667 11.1667" stroke="#BFC6DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
        </div>
    )
}

export default ReloadQrCode