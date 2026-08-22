import CursorGrid from './CursorGrid';

const backgroundColor = '#050816';
const gridOpacity = 0.1;
const fillOpacity = 0.1;

function Bgimg() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor,
        }}
      />
      <div style={{ position: 'absolute', inset: 0 }}>
        <CursorGrid
          cellSize={58}
          color="#22d3ee"
          radius={170}
          falloff="smooth"
          holdTime={320}
          fadeDuration={3000}
          lineWidth={1.4}
          maxOpacity={0.3}
          fillOpacity={fillOpacity}
          gridOpacity={gridOpacity}
          cellRadius={4}
          clickPulse
          pulseSpeed={700}
        />
      </div>
    </div>
  );
}

export default Bgimg;