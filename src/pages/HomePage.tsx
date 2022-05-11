import React, { useEffect, useState } from 'react';
import { openState, prizeState } from '../plugins/ridge';
import { flowers, reward } from '../types';

export const HomePage = () => {
  const [prize, setPrize] = prizeState.use();
  const [open, setOpen] = openState.use();
  const [chosen, setChosen] = useState<number | null>(null);
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    if (cnt >= 20) {
      setPrize(null);
      setOpen(null);
    }
  }, [cnt, setOpen, setPrize]);

  if (!prize || !open) return <></>;

  return (
    <div className="flex flex-col bg-blue-700 w-full h-screen items-center relative">
      <h1
        className="text-white text-5xl font-bold text-center w-full py-2 font-hyeon"
        onClick={() => setCnt((cnt) => cnt + 1)}
      >
        컴공 문방구
      </h1>
      <div className="w-full" onClick={() => setCnt(0)}>
        <div className="grid grid-cols-20 gap-0.5">
          {prize.map((prize, idx) =>
            open[idx] ? (
              <div
                className="bg-white text-yellow-700 flex items-center justify-center h-10 font-hyeon"
                key={idx}
              >
                <p>{flowers[prize as keyof typeof flowers]}</p>
              </div>
            ) : (
              <div
                className="bg-red-700 text-yellow-200 flex items-center justify-center h-10"
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
          className="absolute bg-gray-300 inset-0 flex flex-col items-center justify-center bg-opacity-70"
          onClick={() => setChosen(null)}
        >
          {open[chosen] ? (
            <>
              <div className="bg-white text-yellow-800 w-96 h-64 text-5xl z-50 flex items-center justify-center rounded ">
                <p className="font-hyeon">
                  {flowers[prize[chosen] as keyof typeof flowers]}
                </p>
              </div>
              <p className="text-3xl mt-12 -mb-12 h-0 text-white">
                {reward[prize[chosen] as keyof typeof reward]}
              </p>
            </>
          ) : (
            <div
              className="bg-red-700 text-yellow-200 w-96 h-64 text-4xl z-50 flex items-center justify-center rounded"
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
