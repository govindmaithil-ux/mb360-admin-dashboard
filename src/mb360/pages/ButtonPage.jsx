import { Button } from '../../components/ui/button';

function ButtonPage() {
  return (
    <>
      <Button variant={'primary'}>Primary</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'destructive'}>Destructive</Button>
      <Button variant={'mono'}>Mono</Button>
      <Button variant={'outline'}>Outline</Button>
      <Button variant={'ghost'}>Ghost</Button>
    </>
  );
}

export default ButtonPage;
