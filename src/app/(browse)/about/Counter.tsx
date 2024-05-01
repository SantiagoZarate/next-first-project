'use client'

import React from 'react';
import { Button } from "@/components/button";
import { useCallback, useState } from "react";

const ButtonMemoized = React.memo(Button);

export function Counter() {
  const [count, setCount] = useState(0);

  const restartCounter = useCallback(() => {
    setCount(0);
  }, [])

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count])

  return (
    <article className='flex flex-col gap-4 items-center'>
      <div className='flex gap-2'>
        <Button onClick={incrementCounter}>
          increment
        </Button>
        <ButtonMemoized onClick={restartCounter}>
          restart
        </ButtonMemoized>
      </div>
      <p>
        {count}
      </p>
    </article>
  )
}
