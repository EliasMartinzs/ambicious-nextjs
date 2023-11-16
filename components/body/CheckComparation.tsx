'use client';

import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import { BodyMeasurementsType } from '@/types';
import { formatDate } from '@/lib/utils';

type Props = {
  bodyMeasurements: BodyMeasurementsType[];
  name: string;
  updateProgress: (key: string, id: string) => void;
};

export default function CheckComparation({
  bodyMeasurements,
  name,
  updateProgress,
}: Props) {
  const [selected, setSelected] = useState(bodyMeasurements[0]);

  return (
    <>
      <div className="w-auto">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-transparent py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {formatDate(selected.date?.toString() ?? '')}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown
                  className="h-4 w-4 text-primary-500"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute bg-background text-foreground mt-1 max-h-60 text w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {bodyMeasurements.map((body, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none p-2 ${
                      active ? 'text-primary-500' : 'text-foreground'
                    }`
                  }
                  value={body}
                >
                  {({ selected }) => (
                    <div
                      onClick={() =>
                        updateProgress(name, body._id?.toString() ?? '')
                      }
                    >
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {formatDate(body.date?.toString() ?? '')}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    </>
  );
}
