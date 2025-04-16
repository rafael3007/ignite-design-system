import { colors } from "@ignite-ui/tokens";

export function ColorsGrud(){
  return Object.entries(colors).map(([color, shades]) => {
    return (
      <div key={color} style={{ backgroundColor: shades, padding:'2rem'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', color: '#FFF' }}>
          <strong>${color}</strong>
          <span>{shades}</span>
        </div>
      </div>
    )
  })
}