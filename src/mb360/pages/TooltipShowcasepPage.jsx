import * as React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../components/ui/tooltip';

const variants = ['dark', 'light'] 
const sides = ['top', 'right', 'bottom', 'left'] 

function TooltipItem({ variant, side }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          style={{
            padding: '6px 10px',
            border: '1px solid #e5e7eb',
            borderRadius: 6,
            background: '#fff',
            cursor: 'pointer',
          }}
        >
          {variant} - {side}
        </button>
      </TooltipTrigger>

      <TooltipContent
        variant={variant}
        side={side}
        style={{
          fontSize: 12,
          borderRadius: 6,
        }}
      >
        Tooltip ({variant}) - {side}
      </TooltipContent>
    </Tooltip>
  );
}

export default function TooltipShowcasepPage() {
  return (
    <div style={{ padding: 40 }}>
        <h1>Tooltips </h1>

      {variants.map((variant) => (
        <div key={variant} style={{ marginBottom: 40 }}>
          <h2 style={{ fontWeight: 600, marginBottom: 12 }}>
            Variant: {variant}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              maxWidth: 600,
            }}
          >
            {sides.map((side) => (
              <TooltipItem
                key={side}
                variant={variant}
                side={side}
              />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}