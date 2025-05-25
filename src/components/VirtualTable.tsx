import { FC, useEffect, useRef, useState } from 'react';
import { getBottomHeight, getTopHeight } from '../lib/getHeights';

interface TableProps {
  data: number[][];
  rowHeight: number;
  visibleRows: number;
}

const VirtualTable: FC<TableProps> = ({ data, rowHeight, visibleRows }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);

  const onScroll = (e: any) => {
    setStart(Math.floor(e.target.scrollTop / rowHeight));
  };

  useEffect(() => {
    rootRef.current?.addEventListener('scroll', onScroll);

    return () => {
      rootRef.current?.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div style={{ height: visibleRows * rowHeight + 1, overflow: 'auto' }} ref={rootRef}>
      <table>
        <div style={{ height: getTopHeight(rowHeight, start) }}></div>
        <tbody>
          {data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
            <tr style={{ height: rowHeight }} key={start + rowIndex}>
              {row.map((text, colIndex) => (
                <td key={start + '' + rowIndex + colIndex}>{text}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <div style={{ height: getBottomHeight(rowHeight, data.length, start, visibleRows) }}></div>
      </table>
    </div>
  );
};

export default VirtualTable;
