'use client';

import { checkedTask } from '@/lib/actions/task.action';
import { CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';

type Props = {
  author: string;
  isSelected: boolean;
};

const CheckboxDemo = ({ author, isSelected }: Props) => {
  const toggleChecked = async () => {
    await checkedTask({
      author: author,
      isSelected: !isSelected,
      path: '/',
    });
  };

  return (
    <div className="flex items-center">
      <Checkbox.Root
        checked={isSelected}
        onClick={toggleChecked}
        className="text-primary-500 flex h-[25px] w-[25px] appearance-none fill-primary-500 items-center justify-center rounded-[4px] bg-black/50 outline-none"
      >
        <Checkbox.Indicator className="text-violet11">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
};

export default CheckboxDemo;
