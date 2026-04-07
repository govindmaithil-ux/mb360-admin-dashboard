import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';

function RadioGroupsPage() {
  return (
   <div className="space-y-8 p-6">
      
      {/* PRIMARY VARIANT */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Primary Variant</h2>

        {/* SM */}
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted-foreground">Size: sm</p>
          <RadioGroup variant="primary" size="sm" defaultValue="1">
            <label className="flex items-center gap-2">
              <RadioGroupItem value="1" />
              Option 1
            </label>
            <label className="flex items-center gap-2">
              <RadioGroupItem value="2" />
              Option 2
            </label>
          </RadioGroup>
        </div>

        {/* MD */}
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted-foreground">Size: md</p>
          <RadioGroup variant="primary" size="md" defaultValue="1">
            <label className="flex items-center gap-2">
              <RadioGroupItem value="1" />
              Option 1
            </label>
            <label className="flex items-center gap-2">
              <RadioGroupItem value="2" />
              Option 2
            </label>
          </RadioGroup>
        </div>

        {/* LG */}
        <div>
          <p className="mb-2 text-sm text-muted-foreground">Size: lg</p>
          <RadioGroup variant="primary" size="lg" defaultValue="1">
            <label className="flex items-center gap-2">
              <RadioGroupItem value="1" />
              Option 1
            </label>
            <label className="flex items-center gap-2">
              <RadioGroupItem value="2" />
              Option 2
            </label>
          </RadioGroup>
        </div>
      </div>

      {/* MONO VARIANT */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Mono Variant</h2>

        {/* SM */}
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted-foreground">Size: sm</p>
          <RadioGroup variant="mono" size="sm" defaultValue="1">
            <label className="flex items-center gap-2">
              <RadioGroupItem value="1" />
              Option 1
            </label>
            <label className="flex items-center gap-2">
              <RadioGroupItem value="2" />
              Option 2
            </label>
          </RadioGroup>
        </div>

        {/* MD */}
        <div className="mb-4">
          <p className="mb-2 text-sm text-muted-foreground">Size: md</p>
          <RadioGroup variant="mono" size="md" defaultValue="1">
            <label className="flex items-center gap-2">
              <RadioGroupItem value="1" />
              Option 1
            </label>
            <label className="flex items-center gap-2">
              <RadioGroupItem value="2" />
              Option 2
            </label>
          </RadioGroup>
        </div>

        {/* LG */}
        <div>
          <p className="mb-2 text-sm text-muted-foreground">Size: lg</p>
          <RadioGroup variant="mono" size="lg" defaultValue="1">
            <label className="flex items-center gap-2">
              <RadioGroupItem value="1" />
              Option 1
            </label>
            <label className="flex items-center gap-2">
              <RadioGroupItem value="2" />
              Option 2
            </label>
          </RadioGroup>
        </div>
      </div>

    </div>
  );
}
export default RadioGroupsPage;