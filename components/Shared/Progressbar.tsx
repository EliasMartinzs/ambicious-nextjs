'use client';
import { Line } from 'rc-progress';

export default function Progressbar({ progress }: { progress: number }) {
  return (
    <Line
      percent={progress}
      strokeWidth={1}
      trailWidth={1}
      strokeColor="#f1f1f1"
      trailColor="#2b2626"
    />
  );
}
