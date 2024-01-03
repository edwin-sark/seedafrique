import { Popover } from "@headlessui/react";

export default function MyPopoverComponent() {
  return (
    <Popover>
      {({ open }) => (
        <div>
          <Popover.Button>Open Popover</Popover.Button>
          <Popover.Panel>{open ? <p>Popover Content</p> : null}</Popover.Panel>
        </div>
      )}
    </Popover>
  );
}
