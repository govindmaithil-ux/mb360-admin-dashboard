import {
  Input,
  InputAddon,
  InputGroup,
  InputWrapper,
} from '../../components/ui/input';
import { Search, Mail } from 'lucide-react';

const sizes = ['sm', 'md', 'lg']

function BasicInputs() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {sizes.map((size) => (
        <Input
          key={size}
          variant={size}
          placeholder={`Basic ${size}`}
          style={{
            border: '1px solid #e5e7eb',
            padding: '6px 10px',
            borderRadius: 6,
          }}
        />
      ))}
    </div>
  );
}

function AddonInputs() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {sizes.map((size) => (
        <InputGroup key={size}>
          <InputAddon
            variant={size}
            style={{
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              padding: '0 8px',
            }}
          >
            https://
          </InputAddon>

          <Input
            variant={size}
            placeholder={`Addon ${size}`}
            style={{ border: '1px solid #e5e7eb' }}
          />
        </InputGroup>
      ))}
    </div>
  );
}

function IconInputs() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {sizes.map((size) => (
        <InputGroup key={size}>
          <InputAddon
            variant={size}
            mode="icon"
            style={{
              border: '1px solid #e5e7eb',
              background: '#f9fafb',
            }}
          >
            <Search size={16} />
          </InputAddon>

          <Input
            variant={size}
            placeholder={`Search ${size}`}
            style={{ border: '1px solid #e5e7eb' }}
          />
        </InputGroup>
      ))}
    </div>
  );
}

function WrapperInputs() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {sizes.map((size) => (
        <InputWrapper
          key={size}
          variant={size}
          style={{
            border: '1px solid #e5e7eb',
            padding: '0 10px',
            borderRadius: 6,
          }}
        >
          <Mail size={16} />
          <input
            placeholder={`Email ${size}`}
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
              fontSize: 14,
            }}
          />
        </InputWrapper>
      ))}
    </div>
  );
}

function States() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Input placeholder="Disabled" disabled style={{ border: '1px solid #e5e7eb' }} />
      <Input placeholder="Read only" readOnly style={{ border: '1px solid #e5e7eb' }} />
      <Input placeholder="Invalid" aria-invalid="true" style={{ border: '1px solid #e5e7eb' }} />
    </div>
  );
}

export default function InputsPage() {
  return (
    <div style={{ padding: 20, display: 'grid', gap: 30, maxWidth: 500 }}>

      <div>
        <h2 style={{ fontWeight: 600, marginBottom: 10 }}>Basic</h2>
        <BasicInputs />
      </div>

      <div>
        <h2 style={{ fontWeight: 600, marginBottom: 10 }}>With Addon</h2>
        <AddonInputs />
      </div>

      <div>
        <h2 style={{ fontWeight: 600, marginBottom: 10 }}>Icon Addon</h2>
        <IconInputs />
      </div>

      <div>
        <h2 style={{ fontWeight: 600, marginBottom: 10 }}>Wrapper</h2>
        <WrapperInputs />
      </div>

      <div>
        <h2 style={{ fontWeight: 600, marginBottom: 10 }}>States</h2>
        <States />
      </div>

    </div>
  );
}