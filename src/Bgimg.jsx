import imageUrl from './assets/bgimage.png';
function Bgimg() {
    return(
        <>
        <div style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        filter: 'opacity(15%)',
        width: '100%',
        minHeight: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
      }}></div>
        </>
    )
}
export default Bgimg;