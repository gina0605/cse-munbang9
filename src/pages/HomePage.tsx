import React, { useState } from 'react';
import { openState, prizeState } from '../plugins/ridge';
import { flowers } from '../types';

export const HomePage = () => {
  const prize = prizeState.useValue();
  const [open, setOpen] = openState.use();
  const [chosen, setChosen] = useState<number | null>(null);

  if (!prize || !open) return <></>;

  return (
    <div className="flex flex-col bg-blue-900 w-full h-screen items-center relative">
      <h1 className="text-white text-5xl font-bold text-center w-full py-2">
        컴공 문방구
      </h1>
      <div className="w-full">
        <div className="grid grid-cols-20 gap-0.5">
          {prize.map((prize, idx) =>
            open[idx] ? (
              <div
                className="bg-red-50 text-yellow-700 text-sm flex items-center justify-center h-10"
                key={idx}
              >
                <p>{flowers[prize as keyof typeof flowers]}</p>
              </div>
            ) : (
              <div
                className="bg-red-900 text-yellow-200 flex items-center justify-center h-10"
                key={idx}
                onClick={() => setChosen(idx)}
              >
                <p>{idx + 1}</p>
              </div>
            )
          )}
        </div>
      </div>
      {chosen !== null && (
        <div
          className="absolute bg-gray-300 inset-0 flex items-center justify-center bg-opacity-50"
          onClick={() => setChosen(null)}
        >
          {open[chosen] ? (
            <div className="bg-red-50 text-yellow-700 w-96 h-64 text-4xl z-50 flex items-center justify-center">
              <p>{flowers[prize[chosen] as keyof typeof flowers]}</p>
            </div>
          ) : (
            <div
              className="bg-red-900 text-yellow-200 w-96 h-64 text-4xl z-50 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((open) => {
                  const openCopied = open!.slice();
                  openCopied[chosen] = true;
                  return openCopied;
                });
              }}
            >
              <p>{chosen + 1}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
